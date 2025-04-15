import React from "react";

function NameProps({ age }) {
    let message ="";
  if (age >= 18) {
    message = "this person are eligible to vote";
  } else {
    message="this person are not eligible to vote";
  }
  return (
    <div>
      <h1>murakazaneza muri timtom aviation</h1>
      <h3>
        {message}
      </h3>
    </div>
  );
}

export default NameProps;
