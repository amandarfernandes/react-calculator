import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonRow.module.css';
const Button = ({onClicked,label,type}) =>{
    
    return (
      <input type="button" className={label === '='? styles.SpecialButton:null} onClick={onClicked} value={label} />
    )
}

Button.prototypes = {
    type: PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    onClicked:PropTypes.func.isRequired
}

export default Button;