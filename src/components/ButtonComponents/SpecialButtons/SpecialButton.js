import React from "react";

const SpecialButton = (props) => {
  function specialOperators(){
    if (props.value === "C")
    {
        props.setCurrentValue(Number(0));
        props.setInitialValue(true);
        props.setDisplayStringValue(false);
        props.setNumberSelectedValue(false);
    }
    else if (props.value === "+/-")
    {
      props.setCurrentValue((Number(props.currentValue) * Number(-1)));
    }
    else if (props.value === "%")
    {
      
    }
    return null;
  }
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {
        <button className='specials' onClick={() => {specialOperators()}} >{props.value}</button>
      }
    </>
  );
};

export default SpecialButton;
