import React from 'react';
import styles from './Navigation.module.css'
import {Link} from "react-router-dom";
import appleLogo from '../../assets/png-apple-logo-9711.png'
const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <img className={styles.nav_img} src={appleLogo} alt=""/>
            <h3 className={styles.logo}>Apple Music</h3>
            <span>
                <Link to ='/' className={styles.link}>Home</Link>
                <Link to ='/music_hits' className={styles.link}>Music Hits</Link>
            </span>
        </nav>
    );
};

export default Navigation;