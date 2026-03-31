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

            <a href="file:///C:/Users/thanm/AppData/Local/Packages/5319275A.WhatsAppDesktop_cv1g1gvanyjgm/LocalState/sessions/A7757CF8605D9557B476B8ADF418C118E985A558/transfers/2026-13/Thanmai's%20Resume.pdf"
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