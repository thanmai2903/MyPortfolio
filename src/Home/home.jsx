import React, { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const [text, setText] = useState("");
  const fullText = "Lakshmi Thanmai Palla";
  const typingSpeed = 80;

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home-section">

      <div className="home-container">

        {/* LEFT */}
        <div className="home-text">

          <p className="intro">Hello, I'm</p>

          <h1 className="name">
            {text}
            <span className="cursor">|</span>
          </h1>

          <h2 className="role">
            Web Developer | React Enthusiast
          </h2>

          <p className="desc">
            I build responsive and user-friendly web applications using 
            React, JavaScript, and Tailwind CSS. Focused on clean UI 
            and smooth user experience.
          </p>

          {/* BUTTONS */}
          <div className="buttons">

            <a hhref="/resume.pdf"
 target="_blank" rel="noreferrer" className="resume">
              Resume
            </a>

            <a
              href="https://github.com/thanmai2903"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="linkedin"
            >
              LinkedIn
            </a>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="home-image">
          <img
  src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
  alt="Girl Developer"
  className="profile-img"
/>
        </div>

      </div>

    </section>
  );
}

export default Home;