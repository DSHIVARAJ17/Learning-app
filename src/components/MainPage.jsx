import { useNavigate } from "react-router-dom";
import "../CSS/Main.css";

export default function MainPage({ selectedLanguage }) {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <h1>Welcome to LangLearn</h1>
      <p>You are now learning <strong>{selectedLanguage || "a language"}</strong>!</p>

      <h2>Select Your Level</h2>
      <div className="level-buttons">
        <button onClick={() => navigate("/basic")}>Basic Level</button>
        <button>Intermediate Level</button>
        <button>Advanced Level</button>
      </div>

      <button className="language-select" onClick={() => navigate("/language")}>
        Change Language
      </button>
    </div>
  );
}
