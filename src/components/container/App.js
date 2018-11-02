import React, { Component } from 'react';
import './App.css';
import Header from '../presentational/Header/Header';
import Filters from '../presentational/Filters/Filters';
import styles from './App.css';
class App extends Component {
    state = {
        items: [],
        filters:{
            filter1:{
                isSelected:false
            },
            filter2:{
                isSelected:false
            },
            filter3:{
                isSelected:false
            },
            filter4:{
                isSelected:false
            },
            filter5:{
                isSelected:false
            },
        }
    }
    render() {
        return (
            <div>
                 <Header title="Dashboard" />
                <div className = {styles.container}>
                    <Filters filters = {this.state.filters} />
                </div>
            </div>

        );
    }
}

export default App;