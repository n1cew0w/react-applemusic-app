import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import styles from "./SongCard.module.css"

import {playPause, setActiveSong} from "../../store/playerSlice";
import PlayPause from "../PlayPause/PlayPause";

const SongCard = ({song, isPlaying, activeSong, data, i}) => {
    const dispatch = useDispatch();

    const handlePauseClick = () => {
        dispatch(playPause(false));
    };

    const handlePlayClick = () => {
        dispatch(setActiveSong({song, data, i}));
        dispatch(playPause(true));
    };

    return (
        <>
            <div className={styles.songCard}>
                <div className={styles.songCard_wrapper}>
                    <div className={styles.songCard_inside}>
                        <PlayPause
                            isPlaying={isPlaying}
                            activeSong={activeSong}
                            song={song}
                            handlePause={handlePauseClick}
                            handlePlay={handlePlayClick}
                        />
                    </div>
                    {/*TODO ПОФИКСИТЬ ЧТОБ ЗНАЧОК НЕ ПОЯВЛЯЛСЯ ДО НАВЕДЕНИЯ*/}
                    {/*TODO ПОФИКСИТЬ ЧТОБ ЗНАЧОК НЕ ПОЯВЛЯЛСЯ ДО НАВЕДЕНИЯ*/}
                    {/*TODO ПОФИКСИТЬ ЧТОБ ЗНАЧОК НЕ ПОЯВЛЯЛСЯ ДО НАВЕДЕНИЯ*/}
                    <img className={styles.songCard_image} src={song.images?.coverart} alt=""/>
                </div>
                <div className={styles.bottom}>
                    <p className={styles.bottom_text_title}>
                        <Link to={`/songs/${song?.key}`} className={styles.bottom_title}>
                            {song.title}
                        </Link>
                    </p>
                    <p className={styles.bottom_text_subtitle}>
                        <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}
                              className={styles.bottom_subtitle}>
                            {song.subtitle}
                        </Link>
                    </p>
                </div>
            </div>


        </>
    );
};

export default SongCard;