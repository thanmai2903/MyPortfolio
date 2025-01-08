import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-section">
      <div
        className="about-title slide-in-left ml-20" // Apply the slide-in-left animation class
      >
        ABOUT ME
      </div>
      <div className="about-content">
        <ul>
          <li>I am a web design developer.</li>
          <li>
            I am currently studying at Sri Venkateshwara College Of Engineering,
            Tirupathi.
          </li>
          <li>I got 9.5 CGPA.</li>

          <li>
            I am skilled in responsive web design, ensuring websites work
            seamlessly across devices.
          </li>
          <li>
            I am focused on creating user-friendly and visually appealing
            websites.
          </li>

          <li>
            I always focus on optimizing website performance, including load
            time and responsiveness.
          </li>
          <li>
            My goal is to combine creativity with technical expertise to deliver
            outstanding web experiences.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
