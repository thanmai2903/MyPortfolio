import React, { useState } from "react";
import { Link } from "react-router-dom";
import AhoImage from "../Images/aho.png";
import TouchBistroImage from "../Images/touchbistro.png";
import WixFresh from "../Images/wixfre.png";
import pixune from "../Images/pixune.png";
import hub from "../Images/hubspot.png";
import weebly from "../Images/weebly.png";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Ahobilam",
      description: "A devotional website built using React.",
      image: AhoImage,
      technologies: ["React", "Tailwind CSS", "Node.js"],
      link: "https://github.com/thanmai2903/Ahobilam",
    },
    {
      title: "TouchBistro",
      description: "The best restaurant website easy for online visitors.",
      image: TouchBistroImage,
      technologies: ["HTML", "CSS", "TypeScript"],
      link: "https://github.com/thanmai2903/touchbistro",
    },
    {
      title: "WixFresh",
      description: "Best Food websites.",
      image: WixFresh,
      technologies: ["HTML", "CSS", "TypeScript"],
      link: "https://github.com/thanmai2903/wixfresh",
    },
    {
      title: "Pixune",
      description: "Unleash yout imagination.",
      image: pixune,
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/thanmai2903/pixune",
    },
    {
      title: "HubSpot",
      description:
        "A free CMS software to drive traffic, generate leads and grow revenue.",
      image: hub,
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/thanmai2903/HubSpot",
    },
    {
      title: "Weebly",
      description: "A professional website that grows for your business.",
      image: weebly,
      technologies: ["React", "Tailwind CSS", "Node.js"],
      link: "https://github.com/thanmai2903/weebly",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const getPreviousIndex = (index) =>
    index === 0 ? projects.length - 1 : index - 1;
  const getNextIndex = (index) => (index + 1) % projects.length;

  return (
    <div className="projects-container">
      <h1 className="projects-title">MY PROJECTS</h1>
      <div className="carousel-container">
        <button className="carousel-btn prev-btn" onClick={prevSlide}>
          &lt;
        </button>
        <div className="project-wrapper">
          <div className="project-card project-card-blur">
            <img
              src={projects[getPreviousIndex(currentIndex)].image}
              alt={projects[getPreviousIndex(currentIndex)].title}
              className="project-image half-image"
            />
          </div>
          <div className="project-card project-card-active">
            <img
              src={projects[currentIndex].image}
              alt={projects[currentIndex].title}
              className="project-image full-image"
            />
            <h2
              className="project-title"
              style={{ fontSize: 24, fontWeight: "bold" }}
            >
              {projects[currentIndex].title}
            </h2>
            <p className="project-description" style={{ marginBottom: 16 }}>
              {projects[currentIndex].description}
            </p>

            <div>
              <a
                href={projects[currentIndex].link} // GitHub Link
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginRight: 15,
                  color: "white",
                  backgroundColor: "purple",
                  padding: "5px 10px",
                  marginTop: 10,
                  borderRadius: 5,
                  textDecoration: "none",
                }}
              >
                GitHub
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "white",
                  backgroundColor: "purple",
                  padding: "5px 10px",
                  borderRadius: 5,
                  marginTop: 10,
                  textDecoration: "none",
                }}
              >
                Live
              </a>
            </div>
          </div>
          <div className="project-card project-card-blur">
            <img
              src={projects[getNextIndex(currentIndex)].image}
              alt={projects[getNextIndex(currentIndex)].title}
              className="project-image half-image"
            />
          </div>
        </div>
        <button className="carousel-btn next-btn" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Projects;
