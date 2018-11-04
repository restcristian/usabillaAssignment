import React, { Component } from 'react';
import styles from './TableLayout.css';
import {getDevice, trimText} from '../../../helpers/formatHelper';

class TableLayout extends Component {
    state = {
        isMobile: false
    }

    componentDidMount() {
        window.addEventListener('resize', this.checkWindowSize);
        this.checkWindowSize();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.isMobile !== nextState.isMobile;
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.checkWindowSize);
    }

    render() {

        let layout = null;
        const { items } = this.props;
        const maxNumOfCharacters = 150;

        if (this.state.isMobile) {
            layout = (
                <div className={styles.tableLayoutMobile}>
                    {items.map((item, idx) => {
                        return (
                            <div key={item.id} className={styles.tableMobileRow}>
                                <div className={styles.tableMobileHeading}>
                                    <div className={styles.mobileRating}>Rating</div>
                                </div>
                                <div className={[styles.mobileContent, styles.mobileRating].join(' ')}>
                                    <span>{item.rating}</span>
                                </div>
                                {/* comment */}
                                <div className={styles.tableMobileHeading}>
                                    <div className={styles.mobileComment}>Comment</div>
                                </div>
                                <div className={[styles.mobileContent, styles.mobileComment].join(' ')}>
                                    <span>{trimText(item.comment, maxNumOfCharacters )}</span>
                                </div>
                                {/* browser */}
                                <div className={styles.tableMobileHeading}>
                                    <div className={styles.mobileBrowser}>Browser</div>
                                </div>
                                <div className={[styles.mobileContent, styles.mobileBrowser].join(' ')}>
                                    <span>{item.computed_browser.Browser}</span>
                                    <span>{item.computed_browser.Version}</span>
                                </div>
                                {/* device */}
                                <div className={styles.tableMobileHeading}>
                                    <div className={styles.mobileDevice}>Device</div>
                                </div>
                                <div className={[styles.mobileContent, styles.mobileDevice].join(' ')}>
                                    <span>{getDevice(item.browser.userAgent)}</span>
                                </div>
                                {/* platform */}
                                <div className={styles.tableMobileHeading}>
                                    <div className={styles.mobilePlatfrm}>Platform</div>
                                </div>
                                <div className={[styles.mobileContent, styles.mobilePlatfrm].join(' ')}>
                                    <span>{item.computed_browser.Platform}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            );
        }
        else {
            layout = (
                <div className={styles.tableLayout}>
                    <div className={[styles.tableRow, styles.tableHeading].join(' ')}>
                        <div className={styles.rating}>Rating</div>
                        <div className={styles.comment}>Comment</div>
                        <div className={styles.browser}>Browser</div>
                        <div className={styles.device}>Device</div>
                        <div className={styles.platfrm}>Platform</div>
                    </div>
                    {items.map((item, idx) => {
                        return (
                            <div key={item.id} className={[styles.tableRow, styles.contentRow].join(' ')}>
                                <div className={styles.rating}><span>{item.rating}</span></div>
                                <div className={styles.comment}><span>{trimText(item.comment, maxNumOfCharacters)}</span></div>
                                <div className={styles.browser}>
                                    <span>{item.computed_browser.Browser}</span>
                                    <span>{item.computed_browser.Version}</span>
                                </div>
                                <div className={styles.device}><span>{getDevice(item.browser.userAgent)}</span></div>
                                <div className={styles.platfrm}><span>{item.computed_browser.Platform}</span></div>
                            </div>
                        );
                    })}

                </div>
            );
        }

        return layout;
    }
    

    checkWindowSize = (event) => {
        this.setState({ isMobile: window.innerWidth <= 560 });
    }


}

export default TableLayout;