import React from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Home.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to LangLearn</h1>
        <p>Master new languages with ease and fun interactive learning.</p>
      </header>
      <section className="home-content">
        <h2>Why Choose LangLearn?</h2>
        <p>✔ Interactive lessons tailored for beginners and advanced learners.</p>
        <p>✔ Learn at your own pace with structured levels.</p>
        <p>✔ Improve pronunciation, vocabulary, and grammar efficiently.</p>
      </section>
      <button className="get-started-btn" onClick={() => navigate("/signup")}>
        Let's Get Started
      </button>
    </div>
  );
};

export default HomePage;
