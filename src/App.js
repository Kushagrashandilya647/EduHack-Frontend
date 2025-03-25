import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AuthPage from "./AuthPage";
import LandingPage from "./LandingPage";
import Statistics from "./Statistics";
import CreateQuiz from "./createQuiz";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/create-quiz" element={<CreateQuiz />} />
      </Routes>
    </Router>
  );
}

export default App;
