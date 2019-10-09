import React, { useState } from "react";
import "./App.css";
import "./css/index.css";
import Numbers from '../src/components/ButtonComponents/NumberButtons/Numbers.js';
import Operators from '../src/components/ButtonComponents/OperatorButtons/Operators.js';
import Specials from '../src/components/ButtonComponents/SpecialButtons/Specials.js';
// import NumberButton from '../src/components/ButtonComponents/NumberButton.js';
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display.js";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const [currentValue, setCurrentValue] = useState(0);
  const [operatorValue, setOperatorValue] = useState("=");
  const [numberValue, setNumberValue] = useState(0);
  const [initialValue, setInitialValue] = useState(true);
  const [displayStringValue, setDisplayStringValue] = useState(false);
  const [numberSelectedValue, setNumberSelectedValue] = useState(false);

  return (
    <div className="container">
      <Logo />
      {/* <NumberButton /> */}
      <div className="buttonContainerMaster">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Display 
        current={currentValue} 
        displayStringValue={displayStringValue} 
        numberValue={numberValue} 
        operatorValue={operatorValue}
        numberSelectedValue={numberSelectedValue}
        />
        <Numbers 
        numberValue={numberValue} setNumberValue={setNumberValue} 
        initialValue={initialValue} setInitialValue={setInitialValue}
        currentValue={currentValue} setCurrentValue={setCurrentValue}
        numberSelectedValue={numberSelectedValue} setNumberSelectedValue={setNumberSelectedValue}
        />
        <Operators 
        currentValue={currentValue} setCurrentValue={setCurrentValue} 
        operatorValue={operatorValue} setOperatorValue={setOperatorValue} 
        numberValue={numberValue} setNumberValue={setNumberValue} 
        displayStringValue={displayStringValue} setDisplayStringValue={setDisplayStringValue}
        numberSelectedValue={numberSelectedValue} setNumberSelectedValue={setNumberSelectedValue}
        />
        <Specials 
        currentValue={currentValue} setCurrentValue={setCurrentValue}
        initialValue={initialValue} setInitialValue={setInitialValue}
        setNumberSelectedValue={setNumberSelectedValue} 
        setDisplayStringValue={setDisplayStringValue}
        />
      </div>
      {/* <p className='test'>Op Value: {operatorValue}</p>
      <p>Num Value: {numberValue}</p> */}
    </div>
  );
}

export default App;
