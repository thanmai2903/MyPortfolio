import React, { useState, useEffect } from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  const [text, setText] = useState(""); // State to hold the typed text
  const fullText = "LLakshmi Thanmai Palla,"; // The full text to display
  const typingSpeed = 100; // Typing speed in milliseconds

  useEffect(() => {
    let index = 0;

    // Clear the text before typing
    setText(""); // Clear previous text
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index)); // Correctly appending one char at a time
        index++;
      } else {
        clearInterval(interval); // Stop the typing when finished
      }
    }, typingSpeed);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs only once on component mount

  return (
    <div className="home-page">
      <div className="home-text">
        <div>Hello! I am</div>
        <div style={{ color: "violet", fontSize: "24px", fontWeight: "bold" }}>
          {text}
        </div>
        <div>A Web Design Developer</div>

        <div className="button-group">
          <button className="resume-btn">Resume</button>
          <button className="github-btn">
            <Link to="https://github.com/thanmai2903/">GitHub</Link>
          </button>
        </div>
      </div>
      <div>
        <img
          className="img1"
          src="https://ayeorganization.com/wp-content/uploads/2021/10/web-design-1-1.png"
          alt="Web Design Illustration"
        />
      </div>
    </div>
  );
}

export default Home;
