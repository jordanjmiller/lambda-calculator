import React from "react";

const Display = (props) => {

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {/* <button onClick={() => {props.operatorSetter(props.value)}}>{props.char}</button> */}
      {
        props.displayStringValue 
        ? props.numberSelectedValue 
          ? <div className="display">{props.current} {props.operatorValue} {props.numberValue}</div>
          : <div className="display">{props.current} {props.operatorValue}</div>
        : <div className="display">{props.current}</div>
      }
    </>
  );
};

export default Display;