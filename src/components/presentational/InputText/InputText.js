import React from 'react';
import styles from './InputText.css';
import Aux from '../../hoc/Auxiliar';

const InputText = props => {
    return (
        <Aux>
            <label
                className={styles.hideLabel}
                htmlFor={props.name}>
                {props.label}
            </label>
            <input
                id={props.name}
                name={props.name}
                className={[styles.inputText, props.className].join(' ')}
                type={props.type}
                placeholder={props.placeholder}
                onChange={(event) => props.onChange(event, props.filterKey, props.filterVal)}
            />
        </Aux>

    );
}

export default InputText;