import React from 'react';


import styles from './RelatedSongs.module.css'
import SongBar from "../SongBar/SongBar";

const RelatedSongs = ({ data, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
    <div className={styles.related_wrap}>
        <h1 className={styles.related_songs}>Похожие песни:</h1>

        <div className={styles.related_content}>
            {data?.map((song, i) => (
                <SongBar
                    key={`${artistId}-${song.key}-${i}`}
                    song={song}
                    i={i}
                    artistId={artistId}
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                    handlePauseClick={handlePauseClick}
                    handlePlayClick={handlePlayClick}
                />
            ))}
        </div>
    </div>
);

export default RelatedSongs;