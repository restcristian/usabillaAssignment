import React from 'react';
import styles from './Header.css';
import dashboardIcon from '../../../assets/imgs/dashboard.png';

const Header = props => {
    return (
        <header>
            <div className={styles.header}>
                <div className = {styles.headerWrapper}>
                    <img src={dashboardIcon} alt="Dashboard Icon" />
                    <h1 className={styles.title}>{props.title}</h1>
                </div>
            </div>
        </header>

    );
}

export default Header;