/* eslint no-eval: 0 */

import React, { Component } from 'react';
import CalculatorDisplay from './Components/CalculatorDisplay/CalculatorDisplay'
import ButtonRow from './Components/ButtonRow/ButtonRow';
import styles from './Calculator.module.css';

const operators = ['+','-','x','÷','%'];
const calcRows = [
  [ 
    {label:"AC",type:"action"},
    {label:"CE",type:"action"},
    {label:"%",type:"action"},
    {label:'÷',type:"input"},
  ],
  [ 
    {label:"7",type:"input"},
    {label:"8",type:"input"},
    {label:"9",type:"input"},
    {label:"x",type:"action"},
  ],
  [ 
    {label:"4",type:"input"},
    {label:"5",type:"input"},
    {label:"6",type:"input"},
    {label:"-",type:"action"},
  ],
  [ 
    {label:"1",type:"input"},
    {label:"2",type:"input"},
    {label:"3",type:"input"},
    {label:"+",type:"action"},
  ],
  [ 
    {label:"0",type:"input"},
    {label:".",type:"input"},
    {label:"=",type:"action"},
  ]

]

class Calculator extends Component {

  
  state={
    expression:'',
    solution:'0',
    expressionEvaluated:false
    
  }
  
  isOperator = (val) => {
    if (operators.indexOf(val) === -1) 
      return false;
    return true;
  }

  onClicked = (event) =>{
    event.preventDefault();
    const val = event.target.value;
    
    let {expression, solution, expressionEvaluated} = this.state;
    let splitUp = expression.match(/[^\d()]+|[\d.]+/g);  

     switch (val) {
      case '%':
        if (expression === "") break; 
        if (this.isOperator(expression.slice(-1))) {
          expression = expression.slice(0,-1); 
          splitUp.pop(); 
        }
        splitUp[splitUp.length-1] = `${splitUp[splitUp.length-1]/100}`
        solution = splitUp[splitUp.length-1]; 
        expression = splitUp.join("");
        break;
      case '=':
        if (this.isOperator(expression.slice(-1)))
          expression = expression.slice(0,-1);
        solution = `${eval(expression)}`;
        expression = solution;
        expressionEvaluated = true;
        break;
      case 'CE':
        console.log('test');
        console.log(splitUp);
        solution = '0';  
        splitUp.pop(); 
        expression = splitUp.join("");
        break;
      case 'AC':
        solution = '0';
        expression = '';
        expressionEvaluated = false;
        break;
      case ".":
        if(splitUp[splitUp.length-1].indexOf('.') === -1 ) {
          expression += val;
        }
        break; 
      case "+":
      case"-":
      case"x":
      case"÷":
        if (expression === "" || this.isOperator(expression.slice(-1)))  {
          break;
        }
        let opr =  val === "x" ? "*": (val === "÷"? "/": val);
        expression += opr;
        solution = "0";
        break;
       default: 
        if (expressionEvaluated) {
          expression = val;
          solution = val;
          expressionEvaluated=false;
          break;  
        }
        expression += val;
        solution = val;
        break;
     }
     this.setState({solution,expression, expressionEvaluated});
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
