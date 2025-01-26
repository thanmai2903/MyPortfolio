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

  return (
    <div className="flex flex-col text-center items-center py-10 px-4 lg:px-20">
      <h1 className="text-2xl mb-10 sm:text-3xl lg:text-4xl font-bold ml-[-280px] sm:ml-[-500px] lg:ml-[-1000px]">
        MY PROJECTS
      </h1>
      <div className="relative flex items-center">
        <button
          className="absolute left-10 text-2xl mb-10 sm:text-3xl bg-gray-300 hover:bg-gray-400 rounded-full p-2"
          onClick={prevSlide}
        >
          &lt;
        </button>
        <div className="flex gap-4 overflow-hidden">
          <div className="ml-10 sm:ml-5 lg:ml-32 hidden sm:block w-1/4 opacity-50">
            <img
              src={
                projects[(currentIndex - 1 + projects.length) % projects.length]
                  .image
              }
              alt="Previous Project"
              className="w-full rounded-md"
            />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <img
              src={projects[currentIndex].image}
              alt={projects[currentIndex].title}
              className="w-full rounded-md"
            />
            <h2 className="text-xl lg:text-2xl font-bold mt-4">
              {projects[currentIndex].title}
            </h2>
            <p className="text-sm lg:text-base mt-2 mb-4">
              {projects[currentIndex].description}
            </p>
            <div className="flex gap-4 ml-40 sm:ml-28 lg:ml-40">
              <a
                href={projects[currentIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600"
              >
                GitHub
              </a>
              <a
                href="#"
                className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600"
              >
                Live
              </a>
            </div>
          </div>
          <div className="hidden sm:block w-1/4 opacity-50">
            <img
              src={projects[(currentIndex + 1) % projects.length].image}
              alt="Next Project"
              className="w-full rounded-md"
            />
          </div>
        </div>
        <button
          className="absolute right-[20px] mb-10 text-2xl sm:text-3xl bg-gray-300 hover:bg-gray-400 rounded-full p-2"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Projects;
