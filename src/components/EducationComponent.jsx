import React from "react";
import Heading1 from "./headings/Heading1";
import educationDatabase from "../database/EducationData";
function EducationComponent() {
  return (
    <div>
      <Heading1 headingTitle={"EDUCATION"} />
      <div>
        {educationDatabase.map((item) => {
          return (
            <div key={item.id}>
              <h2>{item.headingTitle}</h2>
              <p>{item.year}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EducationComponent;
