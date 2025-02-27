import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./components/HomePage";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import LanguagePage from "./components/LanguagePage";
import MainPage from "./components/MainPage";
import BasicLevel from "./components/BasicLevel";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/language" element={<LanguagePage setSelectedLanguage={setSelectedLanguage} />} />
        <Route path="/main" element={<MainPage selectedLanguage={selectedLanguage} />} />
        <Route path="/basic" element={<BasicLevel />} />
      </Routes>
    </Router>
  );
}

export default App;
