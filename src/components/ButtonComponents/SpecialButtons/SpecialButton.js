import React from "react";

const SpecialButton = (props) => {
  function specialOperators(){
    if (props.value === "C")
    {

    }
    else if (props.value === "+/-")
    {
      
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
        <button onClick={specialOperators()} >{props.value}</button>
      }
    </>
  );
};

export default SpecialButton;
