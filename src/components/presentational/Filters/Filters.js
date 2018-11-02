import React from 'react';
import InputText from '../InputText/InputText';
import RatingFilters from './RatingFilters/RatingFilters';
import styles from './filters.css';
const Filters = props => {
    return (
        <div className={styles.filters}>
            <div>
                <InputText type="text" placeholder="Search here!" />
            </div>
            <div>
                <RatingFilters filters={props.filters} />
            </div>
        </div>
    );
}

export default Filters;