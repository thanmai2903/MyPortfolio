import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Home/home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import ContactMe from "./ContactMe/ContactMe";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";
import "./index.css";
import Education from "./Education/Education";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Certifications from "./Certifications/Certifications";
import { FaBars, FaTimes } from "react-icons/fa";
/* 🔥 HEADER */
function Header({ dark, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        Thanmai's Portfolio
      </div>

      {/* Desktop Menu */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/education">Education</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/certifications">Certifications</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* Right Side */}
      <div className="right-icons">

        <button
          className="dark-btn"
          onClick={toggleDarkMode}
        >
          {dark ? "☀️" : "🌙"}
        </button>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>

      </div>

      {/* Overlay */}
      <div
        className={`overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Sidebar */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>

        <div className="sidebar-top">

          <h2>Menu</h2>

          <FaTimes
            className="close-icon"
            onClick={() => setMenuOpen(false)}
          />

        </div>

        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/education" onClick={() => setMenuOpen(false)}>Education</Link>
        <Link to="/experience" onClick={() => setMenuOpen(false)}>Experience</Link>
        <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link>
        <Link to="/certifications" onClick={() => setMenuOpen(false)}>Certifications</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

      </div>

    </nav>
  );
}

function App() {
  const [dark, setDark] = useState(false);

  /* 🌙 LOAD SAVED THEME */
  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      document.body.classList.add("dark");
      setDark(true);
    }
  }, []);

  /* 🌙 TOGGLE */
  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    setDark(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <Router>

      <Header dark={dark} toggleDarkMode={toggleDarkMode} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
                <Education />
              <Experience />
              <Projects />
              <Skills />
              <Certifications />
              <ContactMe />
              <Footer/>
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />

        <Route path="/experience" element={<Experience />} />        
        <Route path="/skills" element={<Skills />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>

    </Router>
  );
}

export default App;