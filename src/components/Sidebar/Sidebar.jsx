import React from 'react';
import styles from './Sidebar.module.css'
import Navigation from "../Navigation/Navigation";

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <Navigation/>

        </div>

    );
};

export default Sidebar;