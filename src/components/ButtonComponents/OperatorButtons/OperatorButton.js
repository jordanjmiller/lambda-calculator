import React from "react";

const OperatorButton = (props) => {
  function equalOperator(){
    if (props.numberSelectedValue)
    {
      if (props.operatorValue === '/'){
        props.setCurrentValue(Number(props.currentValue) / Number(props.numberValue));
      }
      else if (props.operatorValue === '*'){
        props.setCurrentValue(Number(props.currentValue) * Number(props.numberValue));
      }
      else if (props.operatorValue === '-'){
        props.setCurrentValue(Number(props.currentValue) - Number(props.numberValue));
      }
      else if (props.operatorValue === '+'){
        props.setCurrentValue(Number(props.currentValue) + Number(props.numberValue));
      }
      props.setDisplayStringValue(false);
      props.setNumberSelectedValue(false);
    }
    
    return null;
  }
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {/* <button onClick={() => {props.operatorSetter(props.value)}}>{props.char}</button> */}
      {
        props.value === '=' 
        ? <button className="operators" onClick={() => {equalOperator()}}>{props.char}</button>
        : <button className="operators" onClick={() => {props.setOperatorValue(props.value); 
          props.setDisplayStringValue(true);
          props.setNumberSelectedValue(false);}}>{props.char}</button>
      }
    </>
  );
};

export default OperatorButton;
