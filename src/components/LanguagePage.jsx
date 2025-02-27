import { useNavigate } from "react-router-dom";
import "../CSS/Language.css";

export default function LanguagePage({ setSelectedLanguage }) {
  const navigate = useNavigate();
  const languages = [
    "English", "Hindi", "French", "Japanese", "Chinese", 
    "Telugu", "Malayalam", "Tamil", "Spanish", "German", "Korean", "Italian"
  ];

  const selectLanguage = (language) => {
    setSelectedLanguage(language); // Set selected language
    navigate("/main"); // Navigate to MainPage
  };

  return (
    <div className="language-container">
      <h1>Select a Language</h1>
      <p>Choose the language you want to learn:</p>
      <div className="language-grid">
        {languages.map((lang) => (
          <button key={lang} onClick={() => selectLanguage(lang)}>
            {lang}
          </button>
        ))}
      </div>
    </div>
  );
}
