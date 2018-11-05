import React from 'react';
import InputText from '../InputText/InputText';
import RatingFilters from './RatingFilters/RatingFilters';
import styles from './filters.css';
const Filters = props => {
    const {filters} = props;
    const textFilterKey = Object.keys(filters)[0];
    const textFilterVal = filters[textFilterKey];

    return (
        <div className={styles.filters}>
            <div>
                <InputText 
                    type="text"
                    placeholder="Search here!" 
                    filterKey = {textFilterKey}
                    filterVal = {textFilterVal}
                    onChange = {props.onFiltering}/>
            </div>
            <div>
                <RatingFilters 
                    filters={props.filters}
                    onClick = {props.onFiltering} 
                />
            </div>
        </div>
    );
}

export default Filters;