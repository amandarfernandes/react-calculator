import React from 'react';
import PropTypes from 'prop-types';
import styles from './CalculatorDisplay.module.css';

const DisplayRow = ({value}) => {

    return (
    <input className={styles.DisplayRow} type="text" readOnly value={value} />
    );
}
DisplayRow.propTypes = {
    value:PropTypes.string.isRequired
}

export default DisplayRow;