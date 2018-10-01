import React, { Component } from 'react';
import CalculatorDisplay from './Components/CalculatorDisplay/CalculatorDisplay'
import ButtonRow from './Components/ButtonRow/ButtonRow';

import styles from './Calculator.module.css';


class Calculator extends Component {
  state={
    expression:'',
    solution:'',
    calcRows:[
      [ 
        {label:"1",type:"input"},
        {label:"2",type:"input"},
        {label:"3",type:"input"},
        {label:"4",type:"input"},
        {label:"-",type:"action"},
        {label:"+",type:"action"}
      ],
      [ 
        {label:"5",type:"input"},
        {label:"6",type:"input"},
        {label:"7",type:"input"},
        {label:"8",type:"input"},
        {label:"*",type:"action"},
        {label:"/",type:"action"}
      ],
      [ 
        {label:"9",type:"input"},
        {label:"0",type:"input"},
        {label:".",type:"input"},
        {label:"C",type:"input"},
        {label:"=",type:"action"},
      ]


    ]
  }

  onClicked = (event) =>{
    event.preventDefault();
    const val = event.target.value;
    
    console.log(val)
     switch (val) {
        case '=':
        const solution = `${eval(this.state.expression)}`;
        this.setState({solution});
        break;

       case 'C':
        this.setState({expression:'',solution:''});
        break;

       default: 
        let {expression} = this.state;
        expression += val;
        this.setState({expression});
        break;
     }

  }
  render() {
    const {expression,solution} = this.state;
    console.log(this.state);
    const buttonRows = this.state.calcRows.map( (buttons,i) =>{
      return <ButtonRow key={`br${i}`} buttons={buttons} onClicked={this.onClicked} />
    }) 
    

    return (
      <div className={styles.Calculator}>
        <CalculatorDisplay expression={expression} solution={solution}/>
        {buttonRows}
      </div>
    );
  }
}

export default Calculator;
