import React from 'react';
import styles from './MusicPlayer.module.css'

const Track = ({ isPlaying, isActive, activeSong }) => (

  <div className={styles.track_wrapper}>
    <div className={`${isPlaying && isActive ? styles.track_anim : ''} ${styles.track_img_wrap}`}>
      <img src={activeSong?.images?.coverart} alt="cover art" className={styles.track_img} />
    </div>
    <div className={styles.track_width}>
      <p className={styles.track_p1}>
        {activeSong?.title ? activeSong?.title : 'No active Song'}
      </p>
      <p className={styles.track_p2}>
        {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
      </p>
    </div>
  </div>
);

export default Track;
