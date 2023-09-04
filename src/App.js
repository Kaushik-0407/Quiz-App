import "./App.css";
import React from "react";
import LandingPage from "./LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetQuiz from "./Teacher/SetQuiz";

function App() {
  return (
   
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path="setquiz" element={<SetQuiz />} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
   
  );
}

export default App;
