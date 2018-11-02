import React from 'react';
import styles from './Header.css';


const Header = props => {
    return (
        <div>
            <div className={styles.header}>
                <i className="" ></i><span className={styles.title}>{props.title}</span>
            </div>
        </div>

    );
}

export default Header;