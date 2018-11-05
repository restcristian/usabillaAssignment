import React from 'react';
import styles from './RatingFilters.css';

const RatingFilters = props => {
    const { filters } = props;
    const keys = Object.keys(filters);

    const filterItems = keys.map((key, idx) => {
        let classList = [styles.filterItem];
        if (filters[key].isSelected) {
            classList.push(styles.active);
        }

        if (filters[key].config.type === 'text') {
            return null;
        } else {
            return (
                <li className={classList.join(' ')} key={idx}>
                    <button onClick={(event => props.onClick(event, key, filters[key]))}>
                        {filters[key].config.value}
                    </button>
                </li>
            );
        }

    });
    return (
        <ul className={styles.ratingFilters}>
            {filterItems}
        </ul>

    );
}

export default RatingFilters;