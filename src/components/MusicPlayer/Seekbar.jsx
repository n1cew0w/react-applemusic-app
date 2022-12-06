import React from 'react';
import styles from './MusicPlayer.module.css'
const Seekbar = ({ value, min, max, onInput, setSeekTime, appTime }) => {
  // converts the time to format 0:00
  const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;

  return (
    <div className={styles.seekbar}>
      <button type="button" onClick={() => setSeekTime(appTime - 5)} className={styles.seekbar_btn}>
        -
      </button>
      <p className={styles.seekbar_p}>{value === 0 ? '0:00' : getTime(value)}</p>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className={styles.seekbar_input}
      />
      <p className="text-white">{max === 0 ? '0:00' : getTime(max)}</p>
      <button type="button" onClick={() => setSeekTime(appTime + 5)} className={styles.seekbar_btn}>
        +
      </button>
    </div>
  );
};

export default Seekbar;
