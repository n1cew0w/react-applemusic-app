import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';
import styles from './MusicPlayer.module.css'


const Controls = ({ isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong }) => (
  <div className={styles.controls}>
    <BsArrowRepeat size={20} color={repeat ? 'red' : 'white'} onClick={() => setRepeat((prev) => !prev)} className={styles.pointer} />
    {currentSongs?.length && <MdSkipPrevious size={30} color="#FFF" className={styles.pointer} onClick={handlePrevSong} />}
    {isPlaying ? (
      <BsFillPauseFill size={45} color="#FFF" onClick={handlePlayPause} className={styles.pointer} />
    ) : (
      <BsFillPlayFill size={45} color="#FFF" onClick={handlePlayPause} className={styles.pointer} />
    )}
    {currentSongs?.length && <MdSkipNext size={30} color="#FFF" className={styles.pointer} onClick={handleNextSong} />}
    <BsShuffle size={20} color={shuffle ? 'red' : 'white'} onClick={() => setShuffle((prev) => !prev)} className={styles.pointer} />
  </div>
);

export default Controls;
