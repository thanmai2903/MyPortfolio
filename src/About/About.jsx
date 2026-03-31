import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* TITLE */}
        <h2 className="about-title">About Me</h2>

        <div className="about-grid">

          {/* LEFT SIDE */}
          <div className="about-left">

            <div className="about-box">
              <p>
                I am a passionate <span>Web Developer</span> focused on building 
                modern, responsive, and user-friendly web applications.
              </p>

              <p>
                I enjoy working on <span>real-world projects</span> that solve 
                practical problems and improve user experience.
              </p>

              <p>
                I completed an <span>AI Internship</span> at Infosys Springboard, 
                where I designed an <strong>autonomous learning agent </strong> 
                using <strong>checkpoint verification</strong> and 
                <strong> Feynman pedagogy</strong>.
              </p>

              <p>
                This experience improved my problem-solving, logical thinking, 
                and communication skills.
              </p>

              <p>
                My goal is to create impactful digital products combining 
                creativity and technical skills.
              </p>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="about-right">

            <div className="card">
              <h3>💻 Development</h3>
              <p>React, JavaScript, HTML, CSS, Tailwind</p>
            </div>

            <div className="card">
              <h3>🎨 UI/UX</h3>
              <p>Responsive design, clean UI, accessibility</p>
            </div>

            <div className="card">
              <h3>⚡ Projects</h3>
              <p>Real-world applications with performance focus</p>
            </div>

            <div className="card highlight">
              <h3>🏆 Internship</h3>
              <p>Infosys AI Internship – Autonomous Learning Agent</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;