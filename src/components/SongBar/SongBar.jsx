import React from 'react';
import { Link } from 'react-router-dom';
import PlayPause from "../PlayPause/PlayPause";
import styles from './SongBar.module.css'


const SongBar = ({ song, i, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
    <div className={`${styles.SongBar_wrap} ${activeSong?.title === song?.title ? styles.SongBar_ternar1 : styles.SongBar_ternar2} ${styles.SongBar_ternar3}`}>
        <h3 className={styles.SongBar_h3}>{i + 1}.</h3>
        <div className={styles.SongBar_song}>
            <img
                className={styles.SongBar_img}
                src={artistId ? song?.attributes?.artwork?.url.replace('{w}', '125').replace('{h}', '125') : song?.images?.coverart}
                alt={song?.title}
            />
            <div className={styles.artist}>
                {!artistId ? (
                    <Link to={`/songs/${song.key}`}>
                        <p className={styles.song_title}>
                            {song?.title}
                        </p>
                    </Link>
                ) : (
                    <p className={styles.song_name}>
                        {song?.attributes?.name}
                    </p>
                )}
                <p className={styles.song_subtitle}>
                    {artistId ? song?.attributes?.albumName : song?.subtitle}
                </p>
            </div>
        </div>
        {!artistId
            ? (
                <PlayPause
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                    song={song}
                    handlePause={handlePauseClick}
                    handlePlay={() => handlePlayClick(song, i)}
                />
            )
            : null}
    </div>
);

export default SongBar;