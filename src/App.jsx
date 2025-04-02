import React from "react";
import Wellcome from "./components/Wellcome";
import MyNavigation from "./components/MyNavigation";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <div>
        <MyNavigation />
        <HomePage />
      </div>
    </>
  );
}

export default App;
