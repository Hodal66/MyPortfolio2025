


import React from "react";

function LearnPropsComponent({ firstNumber, lastNumber }) {
  let sumOfNumbers = firstNumber + lastNumber;
  return (
    <div>
      <h1>Izi ni Content za Learn Props Component</h1>
      <h3>
        The First Number is {firstNumber} The Last Number is {lastNumber} their
        sum is {sumOfNumbers}
      </h3>
    </div>
  );
}

export default LearnPropsComponent;
