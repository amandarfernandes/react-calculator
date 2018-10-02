import React from 'react';
import PropTypes from 'prop-types';
import DisplayRow from './DisplayRow';
//import Aux from '../../hoc/Auxilliary';

import styles from './CalculatorDisplay.module.css';

const CalculatorDisplay = ({expression,solution}) => {
    
    return (
    <div className={styles.CalculatorDisplay}>
    <DisplayRow key={'expr'} value={expression} />
    <DisplayRow key={'soln'} value={solution} />
    </div>
    );
    }

CalculatorDisplay.propTypes = {
    expression: PropTypes.string.isRequired,
    solution:PropTypes.string.isRequired
}

export default CalculatorDisplay;
