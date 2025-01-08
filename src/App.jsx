import React from "react";
import "./App.css";
import Home from "./Home/home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import ContactMe from "./ContactMe/ContactMe";
import Skills from "./Skills/Skills";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        cursor: "pointer",
        gap: 40,
        paddingLeft: 60,
        paddingTop: 30,
        paddingBottom: 30,
        marginBottom: 20,
        fontSize: 18,
      }}
    >
      <div style={{ marginRight: 450, fontSize: 30 }}>MY PORTFOLIO</div>
      <Link
        to="/"
        style={{ textDecoration: "none", color: "black" }}
        onMouseEnter={(e) => (e.target.style.color = "blue")}
        onMouseLeave={(e) => (e.target.style.color = "black")}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{ textDecoration: "none", color: "black" }}
        onMouseEnter={(e) => (e.target.style.color = "blue")}
        onMouseLeave={(e) => (e.target.style.color = "black")}
      >
        About Me
      </Link>
      <Link
        to="/projects"
        style={{ textDecoration: "none", color: "black" }}
        onMouseEnter={(e) => (e.target.style.color = "blue")}
        onMouseLeave={(e) => (e.target.style.color = "black")}
      >
        Projects
      </Link>
      <Link
        to="/skills"
        style={{ textDecoration: "none", color: "black" }}
        onMouseEnter={(e) => (e.target.style.color = "blue")}
        onMouseLeave={(e) => (e.target.style.color = "black")}
      >
        Skills
      </Link>
      <Link
        to="/contact"
        style={{ textDecoration: "none", color: "black" }}
        onMouseEnter={(e) => (e.target.style.color = "blue")}
        onMouseLeave={(e) => (e.target.style.color = "black")}
      >
        Contact Me
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Header />

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
