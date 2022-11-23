import React from 'react';
import styles from './Loader.module.css'
import appleLogo from '../../assets/png-apple-logo-9711.png'
const Loader = () => {
    return (
        <div className={styles.loader}>
            <img className={styles.loader_img} src={appleLogo} alt=""/>
            <h1 className={styles.loader_title}>Загрузка песен..</h1>
        </div>
    );
};

export default Loader;