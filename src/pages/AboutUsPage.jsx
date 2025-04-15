import React from "react";
import NavigationComponent from "../components/NavigationComponent";
import HeaderComponent from "../components/HeaderComponent";
import Skills from "../components/Skills";
import EducationComponent from "../components/EducationComponent";
import educationDatabase from "../database/EducationData";
function AboutUsPage() {
console.log("My Education Database is :", educationDatabase);
  return (
    <div>
      <div>
        <NavigationComponent />
      </div>
      <HeaderComponent title={"About Me"} currentHeading={"About Me"} />
      <Skills />
      <EducationComponent />
      
    </div>
  );
}

export default AboutUsPage;
