import React, { Component } from 'react';
import styles from './TableLayout.css';

class TableLayout extends Component {
    state = {
        isMobile: false
    }

    componentDidMount(){
        window.addEventListener('resize', this.checkWindowSize);
        this.checkWindowSize();
    }

    shouldComponentUpdate(nextProps, nextState){
        return this.state.isMobile !== nextState.isMobile;
    }

    render() {

        let layout = null;

        if(this.state.isMobile){
            layout = (
                <div className = {styles.tableLayoutMobile}>
                <div className = {styles.tableMobileRow}>
                    <div className = {styles.tableMobileHeading}>
                        <div className = {styles.mobileRating}>Rating</div>
                    </div>
                    <div className = {[styles.mobileContent,styles.mobileRating].join(' ')}>
                        <span>2</span>
                    </div>
                    {/* comment */}
                    <div className = {styles.tableMobileHeading}>
                        <div className = {styles.mobileComment}>Comment</div>
                    </div>
                    <div className = {[styles.mobileContent,styles.mobileComment].join(' ')}>
                        <span>lorem impsom ssldasldlsadlasddldlsl</span>
                    </div>
                    {/* browser */}
                    <div className = {styles.tableMobileHeading}>
                        <div className = {styles.mobileBrowser}>Browser</div>
                    </div>
                    <div className = {[styles.mobileContent,styles.mobileBrowser].join(' ')}>
                        <span>Chrome</span>
                    </div>
                    {/* device */}
                    <div className = {styles.tableMobileHeading}>
                        <div className = {styles.mobileDevice}>Device</div>
                    </div>
                    <div className = {[styles.mobileContent,styles.mobileDevice].join(' ')}>
                        <span>iPhone 5</span>
                    </div>
                    {/* platform */}
                    <div className = {styles.tableMobileHeading}>
                        <div className = {styles.mobilePlatfrm}>Platform</div>
                    </div>
                    <div className = {[styles.mobileContent,styles.mobilePlatfrm].join(' ')}>
                        <span>iOS</span>
                    </div>
                </div>
            </div>
            );
        }
        else{
            layout = (
                <div className={styles.tableLayout}>
                <div className={[styles.tableRow, styles.tableHeading].join(' ')}>
                    <div className={styles.rating}>Rating</div>
                    <div className={styles.comment}>Comment</div>
                    <div className={styles.browser}>Browser</div>
                    <div className={styles.device}>Device</div>
                    <div className={styles.platfrm}>Platform</div>
                </div>
                <div className={[styles.tableRow, styles.contentRow].join(' ')}>
                    <div className={styles.rating}><span>2</span></div>
                    <div className={styles.comment}><span>ssdsldsdlsdlsldlsd</span></div>
                    <div className={styles.browser}><span>Chrome</span></div>
                    <div className={styles.device}><span>iPhone 5</span></div>
                    <div className={styles.platfrm}><span>iOS</span></div>
                </div>
            </div>
            );
        }
        
        return layout;
    }

    checkWindowSize = (event) =>{
        this.setState({isMobile:window.innerWidth <= 560});
    }

}

export default TableLayout;