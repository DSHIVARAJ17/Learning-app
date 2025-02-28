import React from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Language.css";

// Import images (ensure images are inside /assets folder)
import english from "../assets/english.png";
import hindi from "../assets/hindi.png";
import french from "../assets/french.png";
import japanese from "../assets/japanese.png";
import chinese from "../assets/chinese.png";
import telugu from "../assets/telugu.png";
import malayalam from "../assets/malayalam.png";

const LanguagePage = () => {
  const navigate = useNavigate();

  const languages = [
    { name: "English", img: english },
    { name: "Hindi", img: hindi },
    { name: "French", img: french },
    { name: "Japanese", img: japanese },
    { name: "Chinese", img: chinese },
    { name: "Telugu", img: telugu },
    { name: "Malayalam", img: malayalam },
  ];

  const handleLanguageSelection = (language) => {
    localStorage.setItem("selectedLanguage", language); // Store selected language
    navigate("/main"); // ✅ Correct route
  };

  return (
    <div className="language-page">
      <h1>Welcome to Lang Learn</h1>
      <h2>Select Your Preferred Language</h2>
      <div className="language-container">
        {languages.map((lang, index) => (
          <div 
            key={index} 
            className="language-box"
            onClick={() => handleLanguageSelection(lang.name)}
          >
            <img src={lang.img} alt={lang.name} />
            <p>{lang.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguagePage;
