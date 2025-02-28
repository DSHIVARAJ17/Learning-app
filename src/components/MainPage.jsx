import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Main.css";

const MainPage = () => {
    const navigate = useNavigate();
    const selectedLanguage = localStorage.getItem("selectedLanguage") || "Not Selected";
    const [completedLevels, setCompletedLevels] = useState(Array(10).fill(false));

    // Load progress from localStorage
    useEffect(() => {
        const storedProgress = JSON.parse(localStorage.getItem("completedLevels"));
        if (storedProgress) {
            setCompletedLevels(storedProgress);
        }
    }, []);

    // Handle level click
    const handleLevelClick = (index) => {
        const updatedLevels = [...completedLevels];
        updatedLevels[index] = true;
        setCompletedLevels(updatedLevels);
        localStorage.setItem("completedLevels", JSON.stringify(updatedLevels));
    };

    // Calculate progress percentage
    const progressPercentage = (completedLevels.filter(level => level).length / 10) * 100;

    return (
        <div className="main-container">
            <h1>Welcome to LangLearn</h1>
            <h2>Selected Language: {selectedLanguage}</h2>

            {/* Progress Bar */}
            <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
            </div>

            {/* Level Boxes */}
            <div className="level-container">
                {completedLevels.map((completed, index) => (
                    <div
                        key={index}
                        className={`level-box ${completed ? "completed" : ""}`}
                        onClick={() => handleLevelClick(index)}
                    >
                        Level {index + 1}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainPage;

