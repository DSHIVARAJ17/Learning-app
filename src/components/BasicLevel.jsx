import { useNavigate } from "react-router-dom";
import "../CSS/BasicLevel.css"; // Importing CSS

export default function BasicLevel() {
  const navigate = useNavigate();

  return (
    <div className="basic-container">
      <h1>Welcome to Basic Tamil Learning</h1>
      <p>Start learning Tamil from the very basics!</p>

      {/* Tamil Alphabets Section */}
      <div className="lesson-box">
        <h2>1. Tamil Alphabets (Vowels)</h2>
        <p>
          Tamil has **12 vowels**. Here are a few:
        </p>
        <p className="tamil-text"><strong>அ (a), ஆ (aa), இ (i), ஈ (ii), உ (u), ஊ (uu)</strong></p>
        <p>
          Try pronouncing them:  
          <br />**அ (a) → "uh"**, **ஆ (aa) → "ah"**, **இ (i) → "ee"**, **உ (u) → "oo"**  
        </p>
      </div>

      <div className="lesson-box">
        <h2>2. Common Tamil Greetings</h2>
        <p>
          Learn to greet someone in Tamil:
          <br /><strong>Hello</strong> = வணக்கம் (Vanakkam)
          <br /><strong>How are you?</strong> = நீங்கள் எப்படி இருக்கிறீர்கள்? (Neenga eppadi irukeenga?)
          <br /><strong>I am fine</strong> = நான் நன்றாக இருக்கிறேன் (Naan nandraaga irukiren)
          <br /><strong>Thank You</strong> = நன்றி (Nandri)
        </p>
      </div>

      <div className="lesson-box">
        <h2>3. Basic Numbers (1-10)</h2>
        <p>
          Learn how to count in Tamil:
        </p>
        <p className="tamil-text">
          1 - ஒன்று (Ondru)  
          <br />2 - இரண்டு (Irendu)  
          <br />3 - மூன்று (Moondru)  
          <br />4 - நான்கு (Naangu)  
          <br />5 - ஐந்து (Aindhu)  
          <br />6 - ஆறு (Aaru)  
          <br />7 - ஏழு (Ezhu)  
          <br />8 - எட்டு (Ettu)  
          <br />9 - ஒன்பது (Onbadhu)  
          <br />10 - பத்து (Pathu)  
        </p>
      </div>

      <div className="lesson-box">
        <h2>4. Everyday Words & Sentences</h2>
        <p>
          Useful words for daily use:
          <br /><strong>Yes</strong> = ஆம் (Aam)
          <br /><strong>No</strong> = இல்லை (Illai)
          <br /><strong>Come here</strong> = இங்கே வா (Inge Vaa)
          <br /><strong>What is your name?</strong> = உங்கள் பெயர் என்ன? (Ungal Peyar Enna?)
          <br /><strong>My name is Ravi</strong> = என் பெயர் ரவி (En Peyar Ravi)
        </p>
      </div>

      <div className="lesson-box">
        <h2>5. Pronunciation Guide</h2>
        <p>
          Tamil has unique sounds. Try saying:
          <br />**வணக்கம்** (Vanakkam) → "Vuh-na-kaam"
          <br />**நன்றி** (Nandri) → "Nan-dree"
        </p>
      </div>

      <button onClick={() => navigate("/main")}>Back to Main</button>
    </div>
  );
}
