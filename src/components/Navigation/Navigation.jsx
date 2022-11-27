import React from 'react';
import styles from './Navigation.module.css'
import {Link} from "react-router-dom";
import appleLogo from '../../assets/png-apple-logo-9711.png'
import {AiOutlineSearch} from 'react-icons/ai'
import {BiPlayCircle} from  'react-icons/bi'
import {CgMenuGridR} from 'react-icons/cg'


const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <div className={styles.logo_section}>
                <img className={styles.nav_img} src={appleLogo} alt=""/>
                <h3 className={styles.logo}>Music</h3>
            </div>
            <span className={styles.input_wrap}>
                    <AiOutlineSearch/>
                    <input className={styles.input} type="text" placeholder={'Поиск'} />
                </span>
            <span className={styles.nav_links}>
                <Link to='/' className={styles.link}>
                    <BiPlayCircle color='#ff4a50' size='20px' className={styles.icon_margin}/>
                    Слушать
                </Link>
                <Link to='/music_hits' className={styles.link}>
                    <CgMenuGridR color='#ff4a50' size='20px' className={styles.icon_margin}/>
                    Обзор
                </Link>
            </span>
        </nav>
    );
};

export default Navigation;