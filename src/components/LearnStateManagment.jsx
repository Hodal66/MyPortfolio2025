import React from "react";

function LearnStateManagment() {
  let myFullName = "Muheto Hodal";
  let studentInformation = {
    id: 1,
    fullName: "Uwineza Mariette",
    ages: 34,
    lesson: "ICT",
    address: "Kigali",
  };

  let allStudentsInformations = [
    {
      id: 1,
      fullName: "Muheto Hodal",
      ages: 34,
      lesson: "ICT",
      address: "Kigali",
    },
    {
      id: 2,
      fullName: "Uwineza Mariette",
      ages: 34,
      lesson: "PHY",
      address: "Kigali",
    },
    {
      id: 3,
      fullName: "Rwandarwejo Pascal",
      ages: 14,
      lesson: "CHE",
      address: "Kigali",
    },
  ];

  let studentInfoArray = ["Uwineza Mariette", "34", "ICT", "kigali"];
  return (
    <div>
      <h2>Learn State Managment in React JS</h2>
      <h3>You name is {myFullName}</h3>
      <h3>You name is Now {studentInformation.fullName}</h3>
      <h3>You Age is Now {studentInformation.ages}</h3>
      <div>
        <h1>Student Address</h1>
        <ul>
          <li>First Name : {studentInfoArray[0]}</li>
          <li>First age : {studentInfoArray[1]}</li>
          <li>First Lesson : {studentInfoArray[2]}</li>
          <li>First Address : {studentInfoArray[3]}</li>
        </ul>
      </div>
      <div>How to Access value in Array of Objects</div>
      <h2>Your First Name is : {allStudentsInformations[1].fullName}</h2>
      <div>
        <ul>
          <li>first Name : {allStudentsInformations[2].fullName}</li>
          <li>First Lesson : {allStudentsInformations[2].lesson}</li>
        </ul>
      </div>
    </div>
  );
}

export default LearnStateManagment;
