import React, { Component } from 'react';
import './App.css';
import Header from '../presentational/Header/Header';
import Filters from '../presentational/Filters/Filters';
import TableLayout from '../presentational/TableLayout/TableLayout';

import { fetchItemsLocally } from '../../helpers/api';
import {sortItemsBy} from '../../helpers/formatHelper';

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
                    value: 1
                }
            },
            filter2: {
                isSelected: false,
                config: {
                    type: 'button',
                    value: 2
                }

            },
            filter3: {
                isSelected: false,
                config: {
                    type: 'button',
                    value: 3
                }
            },
            filter4: {
                isSelected: false,
                config: {
                    type: 'button',
                    value: 4
                }
            },
            filter5: {
                isSelected: false,
                config: {
                    type: 'button',
                    value: 5
                }
            },
        },
        isDataLoading: false,
    }

    componentDidMount() {

        this.setState({ isDataLoading: true }, () => {
            fetchItemsLocally().then(response => {
                let sortedItems = sortItemsBy(response, "rating");
                this.setState({ items: sortedItems, filteredItems: sortedItems, isDataLoading: false });
            });
        });
    }

    onFiltering = (event, filterKey, filterVal) => {

        const { config } = filterVal;
        let newState = {};


        if (config.type === "text") {
            const textValue = event.target.value.toLowerCase();
           
            newState = {
                filters: {
                    ...this.state.filters,
                    [filterKey]: {
                        ...this.state.filters[filterKey],
                        currentText: textValue
                    }
                }
            };

        } else if (config.type == "button") {
            let newFilterVal = { ...filterVal };
            newFilterVal.isSelected = !newFilterVal.isSelected;


            newState = {
                filters: {
                    ...this.state.filters,
                    [filterKey]: newFilterVal
                }
            }
        }

        this.setState(newState, () => {
            let selectedRatingFilters = this.getSelectedRatingFilters();
            const copyItems = [...this.state.items];

            let newItems = copyItems.filter(item => {
                let filterFlag = false;

                if(selectedRatingFilters.length === 0 && this.state.filters["filter0"].currentText.trim() !== "" ) {
                    
                    filterFlag = item.comment.includes(this.state.filters["filter0"].currentText);

                }else if(selectedRatingFilters.length !== 0 && this.state.filters["filter0"].currentText.trim() === "" ){
                    
                    selectedRatingFilters.forEach(selectedFilter => {
                        if(this.state.filters[selectedFilter].config.value === item.rating){
                            filterFlag = true;
                        }
                    });
                    
                }
                else {
                    selectedRatingFilters.forEach(selectedFilter => {
                        if(this.state.filters[selectedFilter].config.value === item.rating && item.comment.includes(this.state.filters["filter0"].currentText)){
                            filterFlag = true;
                        }
                    });
                    
                }
               
                return filterFlag;
            });

            let sortedItems = sortItemsBy(newItems, "rating");

            if(this.state.filters["filter0"].currentText.trim() === "" && selectedRatingFilters.length === 0){
                this.setState({
                    filteredItems: this.state.items
                });

            }else{
                this.setState({
                    filteredItems: sortedItems
                });
            }


        });

    }

    getSelectedRatingFilters = () => {
        let keys = Object.keys(this.state.filters)
        let selectedRatingFilters = keys.filter(key => {
            return (this.state.filters[key].config.type === "button" && this.state.filters[key].isSelected);
        });
        return selectedRatingFilters;
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