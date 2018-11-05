import React from 'react';
import styles from './InputText.css';

const InputText = props => {
    return(
        <input 
            className = {styles.inputText}
            type = {props.type}
            placeholder = {props.placeholder}
            onChange = { (event) => props.onChange(event,props.filterKey, props.filterVal)}
            />
    );
}

export default InputText;