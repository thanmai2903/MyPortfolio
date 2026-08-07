import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowUp,
  FaDownload,
} from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* ===========================
            TOP
        =========================== */}

        <div className="footer-top">

          {/* LEFT */}

          <div className="footer-brand">

            <h2>
              Thanmai Palla
            </h2>

            <span className="footer-role">
              Full Stack Developer
            </span>

            <p>
              Passionate Full Stack Developer specializing in
              React, Node.js, MongoDB and Artificial Intelligence.
              I enjoy building responsive web applications,
              solving real-world problems and continuously
              learning modern technologies.
            </p>

            <div className="footer-contact">

              <div className="footer-contact-item">
                <FaEnvelope />
                <span>thanmaipalla@gmail.com</span>
              </div>

              <div className="footer-contact-item">
                <FaPhoneAlt />
                <span>+91 94419 18650</span>
              </div>

            </div>

          </div>
                    {/* ===========================
              QUICK LINKS
          =========================== */}

          <div className="footer-links">

            <h3>
              Quick Links
            </h3>

            <a href="#home">
              Home
            </a>

            <a href="#about">
              About
            </a>

            <a href="#skills">
              Skills
            </a>

            <a href="#projects">
              Projects
            </a>

            <a href="#experience">
              Experience
            </a>

            <a href="#education">
              Education
            </a>

            <a href="#certifications">
              Certifications
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>

          {/* ===========================
              CONNECT
          =========================== */}

          <div className="footer-connect">

            <h3>
              Connect
            </h3>

            <p>
              Let's connect and build something amazing together.
            </p>

            <div className="social-icons">

              <a
                href="https://github.com/thanmai2903"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/thanmai-palla-09565b2b7?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:thanmaipalla@gmail.com"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>

            </div>

            <a
              href="/resume.pdf"
              download
              className="resume-btn"
            >
              <FaDownload />
              Download Resume
            </a>

          </div>

        </div>
                {/* ===========================
            DIVIDER
        =========================== */}

        <div className="footer-divider"></div>

        {/* ===========================
            FOOTER BOTTOM
        =========================== */}

        <div className="footer-bottom">

          <div className="footer-copy">

            <p>
              © {year} <strong>Thanmai Palla</strong>.
              All Rights Reserved.
            </p>

          </div>

          <div className="footer-credit">

            <p>
              Designed & Developed with ❤️ using React.js
            </p>

          </div>

        </div>

      </div>

      {/* ===========================
          BACK TO TOP
      =========================== */}

      <button
        className="scroll-top"
        onClick={scrollTop}
        aria-label="Back to Top"
      >
        <FaArrowUp />
      </button>

    </footer>
  );
}

export default Footer;