import React from "react";


const NumberButton = (props) => {
  function initial(){
    if (props.numbers === '0')
    {
      return <button className='numbers zero' onClick={() => {
        props.setInitialValue(false); props.setNumberValue(props.numbers); props.setNumberSelectedValue(true);}}>{props.numbers}</button>
    }
    else if (props.numbers === '.')
    {
      return <button className='numbers' onClick={() => {
        props.setInitialValue(false); props.setNumberValue(props.numbers); props.setNumberSelectedValue(true);}}>{props.numbers}</button>
    }
      return <button className='numbers' onClick={() => {
        props.setInitialValue(false); props.setCurrentValue(props.numbers); props.setNumberSelectedValue(true);}}>{props.numbers}</button>
  }
  function numberChecker(){
    if (props.numbers === '0')
    {
      return <button className='numbers zero' onClick={() => {props.setNumberValue(props.numbers); props.setNumberSelectedValue(true);}}>{props.numbers}</button>
    }
    // else if (props.numbers === '.')
    // {
    //   return <button className='numbers' onClick={() => {props.setNumberValue(props.numbers); props.setNumberSelectedValue(true);}}>{props.numbers}</button>
    // }
    return <button className='numbers' onClick={() => {props.setNumberValue(props.numbers); props.setNumberSelectedValue(true);}}>{props.numbers}</button>
  }
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {/* <button>{props.numbers}</button> */}
      {
      props.initialValue
      ? initial()
      : numberChecker()
      }
    </>
  );
};

export default NumberButton