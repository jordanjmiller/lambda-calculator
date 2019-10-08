import React from "react";


const NumberButton = (props) => {
  function initial(){
    props.setCurrentValue(props.numbers);
    props.setInitialValue(false);
  }
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {/* <button>{props.numbers}</button> */}
      {
      props.initialValue
      ? <button onClick={() => initial()}>{props.numbers}</button>
      : <button onClick={() => {props.setNumberValue(props.numbers); props.setNumberSelectedValue(true);}}>{props.numbers}</button>
      }
    </>
  );
};

export default NumberButton