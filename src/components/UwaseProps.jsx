import React from "react";

function UwaseProps({ firstNumber, lastNumber }) {
  let sumOfNumber = firstNumber + lastNumber;
  return (
    <div>
      <h1>wellcome Adeline</h1>
      <h2>
        the firstname is {firstNumber} the lastname is{lastNumber} the sum is
        {sumOfNumber}
      </h2>
    </div>
  );
}

export default UwaseProps;
