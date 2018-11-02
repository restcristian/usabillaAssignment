import React from 'react';
import styles from './RatingFilters.css';

const RatingFilters = props => {
    const {filters} = props;
    const keys = Object.keys(filters);

    const filterItems = keys.map((key, idx) => {
        let classList = [styles.filterItem];
        if(filters[key].isSelected){
            classList.push(styles.active);
        }
        return (
            <li className={classList.join(' ')} key = {idx}>
                <button>{idx + 1}</button>
            </li>
        )
    });
    return (
        <ul className={styles.ratingFilters}>
            {filterItems}
        </ul>

    );
}

export default RatingFilters;