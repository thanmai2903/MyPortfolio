import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* TITLE */}
        <h2 className="about-title">About Me</h2>

        <div className="about-grid">

          {/* LEFT */}

          <div className="about-left">

            <div className="about-box">

              <p>
                Hi! I'm <span>Lakshmi Thanmai Palla</span>, a passionate
                <span> Full Stack Developer</span> and
                <span> AI Enthusiast</span> currently pursuing my
                <strong> B.Tech in Computer Science & Engineering</strong>.
              </p>

              <p>
                I enjoy building modern, responsive and scalable web
                applications using
                <span> React</span>,
                <span> Next.js</span>,
                <span> JavaScript</span> and
                <span> Node.js</span>.
              </p>

              <p>
                During my
                <span> AI Internship at Infosys Springboard</span>,
                I developed an
                <strong> Autonomous Learning Agent </strong>
                using
                <strong> LangGraph</strong>,
                <strong> Google Gemini</strong> and
                <strong> Tavily APIs</strong>.
              </p>

              <p>
                I love solving real-world problems, continuously learning new
                technologies and building impactful software that improves
                people's lives.
              </p>

            </div>

          </div>

          {/* RIGHT */}

          <div className="about-right">

            <div className="card">
              <h3>💻 Tech Stack</h3>

              <ul>
                <li>React.js</li>
                <li>Next.js</li>
                <li>JavaScript</li>
                <li>Node.js</li>
              </ul>

            </div>

            <div className="card">
              <h3>🤖 AI</h3>

              <ul>
                <li>LangGraph</li>
                <li>Google Gemini</li>
                <li>Tavily API</li>
                <li>Prompt Engineering</li>
              </ul>

            </div>

            <div className="card">
              <h3>🎯 Strengths</h3>

              <ul>
                <li>Problem Solving</li>
                <li>Clean UI Design</li>
                <li>Teamwork</li>
                <li>Fast Learner</li>
              </ul>

            </div>

            <div className="card highlight">
              <h3>🚀 Current Focus</h3>

              <ul>
                <li>Full Stack Development</li>
                <li>Artificial Intelligence</li>
                <li>DSA</li>
                <li>Software Engineering</li>
              </ul>

            </div>

          </div>

        </div>

        {/* QUICK HIGHLIGHTS */}

        <div className="about-highlights">

          <div className="highlight-box">
            <h3>1+</h3>
            <p>Internship</p>
          </div>

          <div className="highlight-box">
            <h3>50+</h3>
            <p>Projects</p>
          </div>

          <div className="highlight-box">
            <h3>20+</h3>
            <p>Certificates</p>
          </div>

          <div className="highlight-box">
            <h3>8.86</h3>
            <p>CGPA</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;