import React, { Component } from 'react';
import './App.css';
import Header from '../presentational/Header/Header';
import Filters from '../presentational/Filters/Filters';
import TableLayout from '../presentational/TableLayout/TableLayout';

import { fetchItemsLocally } from '../../helpers/api';

import styles from './App.css';
class App extends Component {
    state = {
        items: [],
        filteredItems: [],
        filters: {
            filter0: {
                currentText: '',
                config: {
                    type: 'text',
                }
            },
            filter1: {
                isSelected: false,
                config: {
                    type: 'button',
                    value:1
                }
            },
            filter2: {
                isSelected: false,
                config: {
                    type: 'button',
                    value:2
                }

            },
            filter3: {
                isSelected: false,
                config: {
                    type: 'button',
                    value:3
                }
            },
            filter4: {
                isSelected: false,
                config: {
                    type: 'button',
                    value:4
                }
            },
            filter5: {
                isSelected: false,
                config: {
                    type: 'button',
                    value:5
                }
            },
        },
        isDataLoading: false,
    }

    componentDidMount() {

        this.setState({ isDataLoading: true }, () => {
            fetchItemsLocally().then(response => {
                this.setState({ items: response, filteredItems: response, isDataLoading: false });
            });
        });
    }

    onFiltering = (event, filterKey, filterVal) => {

        const { config } = filterVal;

        if (config.type === "text") {
            const textValue = event.target.value.toLowerCase();
            const items = [...this.state.items];


            if (event.target.value.trim().length === "") {
                this.setState({ filteredItems: newItems });
            } else {

                let newItems = items.filter(item => {
                    return item.comment.includes(textValue);
                        
                });
                this.setState({ 
                    filteredItems: newItems,
                    filters:{
                        ...this.state.filters,
                        [filterKey]:{
                            ...this.state.filters[filterKey],
                            currentText:textValue
                        }
                    } 
                });

            }

        } else if(config.type == "button"){
            let newFilterVal = {...filterVal};
            newFilterVal.isSelected = !newFilterVal.isSelected;
            
            this.setState({
                filters:{
                    ...this.state.filters,
                    [filterKey]:newFilterVal
                }
            });
        }

    }

    getAllOnFilters = () =>{
       let keys = Object.keys(this.state.filters)
       let onFilters = keys.filter(key => {
            return (this.state.filters[key].config.type === "button" && this.state.filters[key].isSelected) 
        });
       return onFilters;
    }
    render() {
        let content = null;
        if (this.state.isDataLoading) {
            content = <span>Loading...</span>;
        } else {
            content = <TableLayout items={this.state.filteredItems} />
        }
        return (
            <div>
                <Header title="Dashboard" />
                <div className={styles.container}>
                    <Filters
                        onFiltering={this.onFiltering}
                        filters={this.state.filters} />
                    {content}
                </div>
            </div>

        );
    }
}

export default App;