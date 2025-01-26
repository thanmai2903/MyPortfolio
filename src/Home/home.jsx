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
    <div className="home-page text-xs sm:text-2xl lg:text-4xl mt-10">
      <div className="home-text mr-24 sm:mr-22 lg:mr-28 ml-24 sm:ml-28 lg:ml-40">
        <div className=" mb-1 sm:mb-1 lg:mb-3">Hello! I am</div>
        <div className="text-purple-900 mb-1 sm:mb-1 lg:mb-3">{text}</div>
        <div className=" mb-1 sm:mb-1 lg:mb-3">A Web Design Developer</div>

        <div className="button-group">
          <button className="resume-btn mt-0 sm:mt-0 lg:mt-10 px-1 py-1 mr-1 sm:mr-2 lg:mr-4 ml-1 sm:ml-2 lg:ml-20 text-xs sm:text-xm lg:text-xl sm:px-3 sm:py-1 lg:px-4 lg:py-2">
            Resume
          </button>
          <button className="github-btn mt-0 sm:mt-0 lg:mt-10 ml-2 text-xs sm:text-xm lg:text-xl px-1 py-1 sm:px-2 sm:py-1 lg:px-4 lg:py-2">
            <Link to="https://github.com/thanmai2903/">GitHub</Link>
          </button>
        </div>
      </div>
      <div>
        <img
          className="img1 mr-[-96] sm:mr-22 lg:mr-22 w-[110px] sm:w-[800px] lg:w-[-100px]"
          src="https://ayeorganization.com/wp-content/uploads/2021/10/web-design-1-1.png"
          alt="Web Design Illustration"
        />
      </div>
    </div>
  );
}

export default Home;
