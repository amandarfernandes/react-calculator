/* eslint no-eval: 0 */

import React, { Component } from 'react';
import CalculatorDisplay from './Components/CalculatorDisplay/CalculatorDisplay'
import ButtonRow from './Components/ButtonRow/ButtonRow';

import styles from './Calculator.module.css';
const calcRows = [
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

class Calculator extends Component {

  
  state={
    expression:'',
    solution:''
    
  }

  onClicked = (event) =>{
    event.preventDefault();
    const val = event.target.value;
    const operators = ['+','-','*','/'];
    let {expression} = this.state;
     switch (val) {
        case '=':
        
        if (operators.indexOf(expression.slice(-1)) !== -1)
          expression = expression.slice(0,-1);
        const solution = `${eval(expression)}`;
        this.setState({solution,expression:solution});
        break;

       case 'C':
        this.setState({expression:'',solution:''});
        break;
       
       case ".":
        var splitUp = expression.match(/[^\d()]+|[\d.]+/g);
        //console.log(splitUp)
        if(splitUp[splitUp.length-1].indexOf('.') === -1 ) {
          expression += val;
          this.setState({expression});
        }
        break; 

       default: 
        if (operators.indexOf(val) !== -1 && operators.indexOf(expression.slice(-1)) !== -1) {
            break;
        }
        expression += val;
        this.setState({expression});
        break;
     }

  }
  render() {
    const {expression,solution} = this.state;
       const buttonRows = calcRows.map( (buttons,i) =>{
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
