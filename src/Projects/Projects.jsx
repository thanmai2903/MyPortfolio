import React, { useState, useEffect } from "react";
import "./Projects.css";

/* IMAGES */
import AhoImage from "../Images/aho.png";
import WeatherAppImage from "../Images/weather.png";
import WixFresh from "../Images/wixfre.png";
import pixune from "../Images/pixune.png";
import hub from "../Images/hubspot.png";
import weebly from "../Images/weebly.png";
import youtube from "../Images/youtub.png";

function Projects() {
  const [current, setCurrent] = useState(0);

  const projects = [
    {
      title: "Ahobilam",
      image: AhoImage,
      tech: "React, Tailwind CSS, Node.js",
      github: "https://github.com/thanmai2903/Ahobilam",
      live: "#",
      points: [
        "Built devotional website using React",
        "Responsive UI with Tailwind CSS",
        "Clean navigation and structured layout"
      ]
    },
    {
      title: "Netflix-GPT",
      image: WeatherAppImage,
      tech: "React, Redux, Firebase, OpenAI API",
      github: "https://github.com/thanmai2903/netflixx-gpt",
      live: "#",
      points: [
        "Netflix clone with authentication",
        "GPT-based movie recommendation system",
        "Optimized performance using Redux"
      ]
    },
    {
      title: "YouTube Clone",
      image: youtube,
      tech: "React, Tailwind, YouTube API",
      github: "https://github.com/thanmai2903/YouTube-Project",
      live: "#",
      points: [
        "Video streaming app with responsive UI",
        "Integrated YouTube API",
        "Reusable components and clean state management"
      ]
    },
    {
      title: "Weather App",
      image: WeatherAppImage,
      tech: "React, Tailwind, API",
      github: "https://github.com/thanmai2903/weather-app",
      live: "#",
      points: [
        "Real-time weather data using API",
        "Dynamic UI based on conditions",
        "Fully responsive design"
      ]
    },
    {
      title: "WixFresh",
      image: WixFresh,
      tech: "HTML, CSS, TypeScript",
      github: "https://github.com/thanmai2903/wixfresh",
      live: "#",
      points: [
        "Food website UI design",
        "Responsive layout",
        "Clean modern styling"
      ]
    },
    {
      title: "Pixune",
      image: pixune,
      tech: "HTML, CSS, JavaScript",
      github: "https://github.com/thanmai2903/pixune",
      live: "#",
      points: [
        "Creative UI design project",
        "Interactive elements",
        "User-friendly layout"
      ]
    },
    {
      title: "HubSpot Clone",
      image: hub,
      tech: "HTML, CSS, JavaScript",
      github: "https://github.com/thanmai2903/HubSpot",
      live: "#",
      points: [
        "CMS-style landing page clone",
        "Responsive design",
        "Structured layout"
      ]
    },
    {
      title: "Weebly Clone",
      image: weebly,
      tech: "React, Tailwind CSS",
      github: "https://github.com/thanmai2903/weebly",
      live: "#",
      points: [
        "Website builder UI clone",
        "Modern UI using Tailwind",
        "Reusable components"
      ]
    }
  ];

  /* AUTO SLIDER */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [projects.length]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  return (
    <section className="projects-section">
      <div className="projects-container">

        <h2 className="projects-title">Projects</h2>

        <div className="project-display">

          {/* LEFT IMAGE */}
          <div className="project-image">
            <img src={projects[current].image} alt="project" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="project-details">

            <h3>{projects[current].title}</h3>

            <p className="tech">{projects[current].tech}</p>

            <ul>
              {projects[current].points.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>

            <div className="buttons">
              <a href={projects[current].github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={projects[current].live} target="_blank" rel="noreferrer">
                Live
              </a>
            </div>

          </div>

        </div>

        {/* ARROWS */}
        <button className="arrow left" onClick={prev}>❮</button>
        <button className="arrow right" onClick={next}>❯</button>

        {/* DOTS */}
        <div className="dots">
          {projects.map((_, i) => (
            <span
              key={i}
              className={i === current ? "dot active-dot" : "dot"}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;