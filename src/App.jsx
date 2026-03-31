import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Home/home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import ContactMe from "./ContactMe/ContactMe";
import Skills from "./Skills/Skills";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

/* 🔥 HEADER */
function Header({ dark, toggleDarkMode }) {
  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo">
        Thanmai's Portfolio
      </div>

      {/* NAV LINKS */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* DARK MODE BUTTON */}
      <button className="dark-btn" onClick={toggleDarkMode}>
        {dark ? "☀️" : "🌙"}
      </button>

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
              <Projects />
              <Skills />
              <ContactMe />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>

    </Router>
  );
}

export default App;