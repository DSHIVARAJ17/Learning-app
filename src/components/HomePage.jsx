import { Link } from "react-router-dom";
import "../CSS/Home.css"; // Import existing CSS

export default function HomePage() {
  return (
    <div className="home-container">
      <h1>Welcome to LangLearn!</h1>
      <p>Master new languages with fun and interactive lessons.</p>
      <Link to="/signup">
        <button className="start-btn">Let’s Get Started</button>
      </Link>
    </div>
  );
}
