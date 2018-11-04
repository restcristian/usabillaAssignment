import React, { Component } from 'react';
import './App.css';
import Header from '../presentational/Header/Header';
import Filters from '../presentational/Filters/Filters';
import TableLayout from '../presentational/TableLayout/TableLayout';

import {fetchItemsLocally} from '../../helpers/api';

import styles from './App.css';
class App extends Component {
    state = {
        items: [],
        filteredItems:[],
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
        },
        isDataLoading:false,
    }

    componentDidMount(){
        
        this.setState({isDataLoading:true}, ()=> {
            fetchItemsLocally().then(response =>{
                this.setState({items:response, filteredItems:response,isDataLoading:false});
            });
        });
    }
    render() {
        let content = null;
        if(this.state.isDataLoading){
            content = <span>Loading...</span>;
        }else{
            content =  <TableLayout items = {this.state.filteredItems}/>
        }
        return (
            <div>
                 <Header title="Dashboard" />
                <div className = {styles.container}>
                    <Filters filters = {this.state.filters} />
                    {content}
                </div>
            </div>

        );
    }
}

export default App;