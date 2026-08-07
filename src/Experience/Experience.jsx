import "./Experience.css";
import infosysCertificate from "../Images/infosys-certificate.jpeg";
import infosysPreview from "../Images/infosys-preview.png";


function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">

        {/* ================= Title ================= */}

        <h2 className="experience-title">Experience</h2>

        {/* ================= Timeline ================= */}

        <div className="experience-timeline">

          <div className="experience-item">

            <div className="experience-dot"></div>

            <div className="experience-card">

              {/* Header */}

              <div className="experience-header">

                <div>

                  <span className="experience-date">
                    Nov 2025 – Jan 2026
                  </span>

                  <h3>AI Intern</h3>

                  <h4>Infosys Springboard</h4>

                </div>

                <span className="experience-badge">
                  Internship
                </span>

              </div>

              {/* Description */}

              <p className="experience-description">

                Successfully completed an <strong>AI Internship</strong> at
                <strong> Infosys Springboard</strong>, where I designed an
                <strong> Autonomous Learning Agent</strong> using
                <strong> LangGraph</strong>,
                <strong> Google Gemini</strong>,
                <strong> Tavily API</strong>,
                <strong> Checkpoint Verification</strong> and
                <strong> Feynman Pedagogy</strong>.

              </p>

              {/* Key Contributions */}

              <div className="experience-block">

                <h5>Key Contributions</h5>

                <ul>

                  <li>
                    Developed an Autonomous Learning Agent using LangGraph and
                    Google Gemini.
                  </li>

                  <li>
                    Designed a complete AI workflow:
                    <strong> Scope → Research → Report Generation.</strong>
                  </li>

                  <li>
                    Integrated Tavily Search API for real-time web research.
                  </li>

                  <li>
                    Implemented Checkpoint Verification for AI response
                    validation.
                  </li>

                  <li>
                    Applied Feynman Pedagogy to simplify complex AI generated
                    research.
                  </li>

                </ul>

              </div>

              {/* Tech Stack */}

              <div className="experience-block">

                <h5>Technologies Used</h5>

                <div className="tech-stack">

                  <span>LangGraph</span>

                  <span>LangChain</span>

                  <span>Google Gemini</span>

                  <span>Tavily API</span>

                  <span>Python</span>

                  <span>Docker</span>

                  <span>Git</span>

                  <span>GitHub</span>

                  <span>Jupyter</span>

                </div>

              </div>

              {/* Featured Project */}

              <div className="experience-project">

                <h5>Featured Internship Project</h5>

                <h3>
                  Designing an Autonomous Learning Agent with Checkpoint
                  Verification & Feynman Pedagogy
                </h3>

                <p>

                  Built an AI-powered Deep Research System capable of
                  intelligent planning, multi-agent collaboration,
                  web research and automated report generation.

                </p>

              </div>

              {/* ================= Certificate Section ================= */}

<div className="certificate-card">

  {/* Certificate Preview */}

  <a
    href={infosysCertificate}
    target="_blank"
    rel="noreferrer"
    className="certificate-preview"
  >

    <img
      src={infosysPreview}
      alt="Infosys Internship Certificate"
      className="certificate-preview-image"
    />

    <div className="preview-overlay">
      <span>🔍 View Full Certificate</span>
    </div>

  </a>

  {/* Certificate Content */}

  <div className="certificate-content">

    <h4>Infosys Springboard Internship</h4>

    <p>
      Successfully completed a <strong>3-month AI Internship</strong> at
      <strong> Infosys Springboard</strong>, where I built an
      <strong> Autonomous Learning Agent</strong> using
      <strong> LangGraph</strong>,
      <strong> Google Gemini</strong> and
      <strong> Tavily Search API</strong>.
    </p>

    <div className="certificate-buttons">

      <a
        href={infosysCertificate}
        target="_blank"
        rel="noreferrer"
        className="verify-btn"
      >
        View Certificate
      </a>

      <a
        href="https://github.com/thanmai2903/Designing-an-Autonomous-Learning-Agent-with-Checkpoint-Verification-and-Feynman-Pedagogy"
        target="_blank"
        rel="noreferrer"
        className="github-btn"
      >
        GitHub Repository
      </a>

    </div>

  </div>

</div>

              
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;