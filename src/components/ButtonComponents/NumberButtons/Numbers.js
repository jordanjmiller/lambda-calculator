import React, { useState } from "react";
import data from '../../../data.js';
import NumberButton from "./NumberButton";
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numberState] = useState(data.numbers);
  return (
    <div className='buttonContainerOne numberContainer'>
      {
        /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
      it any props needed by the child component*/}
      {
       numberState.map((num, index)=>{
          return <NumberButton key={index} numbers={num}
          numberValue={props.numberValue} setNumberValue={props.setNumberValue} 
          initialValue={props.initialValue} setInitialValue={props.setInitialValue}
          currentValue={props.currentValue} setCurrentValue={props.setCurrentValue}
          numberSelectedValue={props.numberSelectedValue} setNumberSelectedValue={props.setNumberSelectedValue}/>
       })
       
      }
    </div>
  );
};
export default Numbers
