import React from "react";
import HomePage from "./pages/HomePage";
import ContactUsPage from "./pages/ContactUsPage";
import AboutUsPage from "./pages/AboutUsPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LearnStateManagment from "./components/LearnStateManagment";
// import HomePage from "./pages/HomePage";
// import UwaseProps from "./components/UwaseProps";
// import NameProps from "./components/NameProps";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/about" element={<AboutUsPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
