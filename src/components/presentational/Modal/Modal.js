import React from 'react';
import Drop from '../../presentational/drop/Drop';
import Aux from '../../hoc/Auxiliar';
import styles from './Modal.css';

const Modal = props =>{
   
        let modal = null;
        if(props.isOpen){
            modal = (
                <Aux>
                    <Drop onDropClick = {props.closeModal}/>
                    <div className = {styles.modal}>
                        <div className = {styles.modalHeader}>
                            <h4>{props.headerText}</h4>
                        </div>
                        <div className = {styles.modalBody}>
                        {props.children}
                        </div>
                        
                    </div>
                </Aux>
            );
        }

        return modal;
}

export default Modal;