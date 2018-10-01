import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import styles from './ButtonRow.module.css';
const ButtonRow = ({buttons,onClicked}) => {
  const calcRow = buttons.map((button,i)=>(
  <Button key={`button${i}`} label={button.label} onClicked={onClicked} type={button.type} />))
  return (
      <div className={styles.ButtonRow}>
          {calcRow}
      </div>
  );
}

ButtonRow.propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClicked:PropTypes.func.isRequired
}


export default ButtonRow;