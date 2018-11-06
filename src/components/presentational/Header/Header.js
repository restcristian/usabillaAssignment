import React from 'react';
import styles from './Header.css';


const Header = props => {
    return (
        <header>
            <div className={styles.header}>
                <h1 className={styles.title}>{props.title}</h1>
            </div>
        </header>

    );
}

export default Header;