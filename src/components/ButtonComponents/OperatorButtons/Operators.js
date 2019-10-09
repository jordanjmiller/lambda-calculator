import React, { useState } from "react";
import data from '../../../data.js';
import OperatorButton from './OperatorButton.js';

//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operators] = useState(data.operators); 
  return (
    <div className='buttonContainerTwo'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
      operators.map((operator, index) => {
        return <OperatorButton key={index} char={operator.char} value={operator.value}
        currentValue={props.currentValue} setCurrentValue={props.setCurrentValue} 
        operatorValue={props.operatorValue} setOperatorValue={props.setOperatorValue} 
        numberValue={props.numberValue} setNumberValue={props.setNumberValue}
        displayStringValue={props.displayStringValue} setDisplayStringValue={props.setDisplayStringValue}
        numberSelectedValue={props.numberSelectedValue} setNumberSelectedValue={props.setNumberSelectedValue}/>;
      })
      }
    </div>
  );
};

export default Operators;
