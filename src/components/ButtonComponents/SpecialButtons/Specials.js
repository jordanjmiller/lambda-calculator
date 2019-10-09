import React, { useState } from "react";
import data from '../../../data.js';
import SpecialButton from './SpecialButton.js';

//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specials] = useState(data.specials); 
  return (
    <div className='buttonContainerOne specialsContainer'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {
        specials.map((special, index) => {
        return <SpecialButton key={index} value={special}
        currentValue={props.currentValue} setCurrentValue={props.setCurrentValue} 
        initialValue={props.initialValue} setInitialValue={props.setInitialValue}
        displayStringValue={props.displayStringValue} setDisplayStringValue={props.setDisplayStringValue}
        numberSelectedValue={props.numberSelectedValue} setNumberSelectedValue={props.setNumberSelectedValue}/>;
      })
      }
    </div>
  );
};

export default Specials;