


import React from "react";

function LearnFunction() {
  function addNumbers(firstNumber, lastNumber) {
    let sumOfNumbers = firstNumber + lastNumber;
    return sumOfNumbers;
  }
  return (
    <div>
      <h1>Murakaza Neza Murisanga</h1>
      {addNumbers(300, 500)}
    </div>
  );
}

export default LearnFunction;
