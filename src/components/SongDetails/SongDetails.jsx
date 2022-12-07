import React from 'react';
import { useParams } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {useGetSongDetailsQuery, useGetSongRelatedQuery} from "../../store/shazamCore/shazamCore.api";
import Loader from "../Loader/Loader";
import {playPause, setActiveSong} from "../../store/playerSlice";
import styles from './SongDetails.module.css'
import DetailsHeader from "../DetailsHeader/DetailsHeader";
import RelatedSongs from "../RelatedSongs/RelatedSongs";

const SongDetails = () => {
    const dispatch = useDispatch();
    const { songid, id: artistId } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);

    const { data, isFetching: isFetchinRelatedSongs, error } = useGetSongRelatedQuery({ songid });
    const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({ songid });

    if (isFetchingSongDetails && isFetchinRelatedSongs) return <Loader title="Загрузка деталей о песне.." />;

    console.log(songData);

    // if (error) return <Error />;

    const handlePauseClick = () => {
        dispatch(playPause(false));
    };

    const handlePlayClick = (song, i) => {
        dispatch(setActiveSong({ song, data, i }));
        dispatch(playPause(true));
    };

    return (
        <div className={styles.details_wrap}>
            <DetailsHeader
                artistId={artistId}
                songData={songData}
            />

            <div className={styles.lyrics_wrap}>
                <h2 className={styles.lyrics}>Текст песни:</h2>

                <div className={styles.lyricsMarg}>
                    {songData?.sections[1].type === 'LYRICS'
                        ? songData?.sections[1]?.text.map((line, i) => (
                            <p key={`lyrics-${line}-${i}`} className={styles.lyrics_text}>{line}</p>
                        ))
                        : (
                            <p className={styles.lyrics_error}>Sorry, No lyrics found!</p>
                        )}
                </div>
            </div>

            <RelatedSongs
                data={data}
                artistId={artistId}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={handlePlayClick}
            />

        </div>
    );
};


export default SongDetails;