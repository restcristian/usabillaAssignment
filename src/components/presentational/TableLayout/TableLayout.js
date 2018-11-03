import React, { Component } from 'react';
import styles from './TableLayout.css';

class TableLayout extends Component {
    state = {
        isMobile: false
    }
    render() {
        return (
            <div className={styles.tableLayout}>
                    <div className = {[styles.tableRow, styles.tableHeading].join(' ')}>
                        <div className = {styles.rating}>Rating</div>
                        <div className = {styles.comment}>Comment</div>
                        <div className = {styles.browser}>Browser</div>
                        <div className = {styles.device}>Device</div>
                        <div className = {styles.platfrm}>Platform</div>
                    </div>
                    <div className = {[styles.tableRow, styles.contentRow ].join(' ')}>
                        <div className = {styles.rating}><span>2</span></div>
                        <div className = {styles.comment}><span>ssdsldsdlsdlsldlsd</span></div>
                        <div className = {styles.browser}><span>Chrome</span></div>
                        <div className = {styles.device}><span>iPhone 5</span></div>
                        <div className = {styles.platfrm}><span>iOS</span></div>
                    </div>
            </div>
        );
    }
}

export default TableLayout;