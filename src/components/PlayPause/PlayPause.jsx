import React from 'react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

import styles from './PlayPause.module.css'
const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => (isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle
        size={35}
        className={styles.img}
        onClick={handlePause}
    />
) : (
    <FaPlayCircle
        size={35}
        className={styles.img}
        onClick={handlePlay}
    />
));

export default PlayPause;