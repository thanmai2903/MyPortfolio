import React, { useState, useEffect } from "react";
import "./home.css";

function Home() {
  const roles = [
    "Frontend Developer",
    "Full Stack Developer",
    "React Developer",
    "AI Enthusiast",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    let currentText = "";
    let index = 0;

    const typing = setInterval(() => {
      currentText += roles[roleIndex][index];
      setText(currentText);
      index++;

      if (index === roles[roleIndex].length) {
        clearInterval(typing);

        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setText("");
        }, 1500);
      }
    }, 70);

    return () => clearInterval(typing);
  }, [roleIndex]);

  return (
    <section className="home-section" id="home">
      <div className="home-container">

        {/* Left */}

        <div className="home-text">

          <span className="open-badge">
            🟢 Open To Work
          </span>

          <p className="intro">
            Hi, I'm
          </p>

          <h1 className="name">
            Lakshmi Thanmai Palla
          </h1>

          <h2 className="typing-role">
            {text}
            <span className="cursor">|</span>
          </h2>

          <p className="desc">
            Passionate Full Stack Developer specializing in
            React, Next.js and AI-powered applications.

            I enjoy building scalable, responsive and modern
            web applications that solve real-world problems.
          </p>

          <div className="tech-stack">

            <span>React</span>

            <span>JavaScript</span>

            <span>Tailwind</span>

            <span>Node.js</span>

            <span>AI</span>

          </div>

          <div className="buttons">

            <a
              href="/resume.pdf"
              className="resume"
              target="_blank"
              rel="noreferrer"
            >
              ⬇ Download Resume
            </a>

            <a href="#projects" className="project-btn">
              View Projects
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
              href="https://linkedin.com/in/thanmai-palla-09565b2b7"
              target="_blank"
              rel="noreferrer"
              className="linkedin"
            >
              LinkedIn
            </a>

          </div>

        </div>

        {/* Right */}

        <div className="home-image">

          <img
            src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
            alt="profile"
            className="profile-img"
          />

        </div>

      </div>
    </section>
  );
}

export default Home;