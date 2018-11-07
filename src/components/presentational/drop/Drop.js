import React from 'react';
import styles from './Drop.css';

const Drop = props => {
   return (
    <div className =  {styles.drop} onClick =  { props.onDropClick} >
    </div>
   )
}

export default Drop;
