import React from "react";
import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";

import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiPostman,
  SiCloudinary,
  SiOpenrouter
} from "react-icons/si";

import {
  TbApi
} from "react-icons/tb";

import {
  VscVscode
} from "react-icons/vsc";

import {
  GiArtificialHive
} from "react-icons/gi";
/* =========================================================
   FRONTEND DEVELOPMENT
========================================================= */

const frontendSkills = [

  {
    title: "HTML5",
    icon: FaHtml5,
    level: " Expert ",
    progress: 95,
    projects: 8,
    description:
      "Semantic HTML, SEO-friendly structure and accessibility.",
  },

  {
    title: "CSS3",
    icon: FaCss3Alt,
    level: " Expert",
    progress: 92,
    projects: 8,
    description:
      "Responsive layouts using Flexbox, CSS Grid and animations.",
  },

  {
    title: "JavaScript",
    icon: SiJavascript,
    level: " Expert",
    progress: 90,
    projects: 7,
    description:
      "ES6+, DOM manipulation, asynchronous programming and APIs.",
  },

  {
    title: "React",
    icon: FaReact,
    level: "Expert",
    progress: 95,
    projects: 6,
    description:
      "Reusable components, Hooks, Context API and scalable UI.",
  },

  {
    title: "Next.js",
    icon: SiNextdotjs,
    level: "Intermediate",
    progress: 82,
    projects: 2,
    description:
      "Server-side rendering, routing and optimized React apps.",
  },

  {
    title: "Tailwind CSS",
    icon: SiTailwindcss,
    level: " Expert",
    progress: 93,
    projects: 7,
    description:
      "Utility-first CSS framework for responsive modern UI.",
  }

];

/* =========================================================
   BACKEND DEVELOPMENT
========================================================= */

const backendSkills = [

  {
    title: "Node.js",
    icon: FaNodeJs,
    level: "Intermediate",
    progress: 82,
    projects: 4,
    description:
      "Backend development using Express and REST APIs.",
  },

  {
    title: "Express.js",
    icon: SiExpress,
    level: "Intermediate",
    progress: 80,
    projects: 4,
    description:
      "RESTful API development, middleware and routing.",
  },

  {
    title: "MongoDB",
    icon: SiMongodb,
    level: "Intermediate",
    progress: 82,
    projects: 4,
    description:
      "Database design, CRUD operations and aggregation.",
  },

  {
    title: "Firebase",
    icon: SiFirebase,
    level: " Expert",
    progress: 90,
    projects: 5,
    description:
      "Authentication, Firestore, Hosting and Cloud services.",
  }

];

/* =========================================================
   AI & APIs
========================================================= */

const aiSkills = [

  {
    title: "Groq API",
    icon: GiArtificialHive,
    level: " Expert",
    progress: 90,
    projects: 2,
    description:
      "LLM integration, AI chatbot development and streaming responses.",
  },

  {
    title: "OpenRouter",
    icon: SiOpenrouter,
    level: "Intermediate",
    progress: 84,
    projects: 2,
    description:
      "Access multiple AI models through a single API platform.",
  },

  {
    title: "REST APIs",
    icon: TbApi,
    level: " Expert",
    progress: 92,
    projects: 8,
    description:
      "API integration, data fetching, authentication and JSON handling.",
  },

  {
    title: "Cloudinary",
    icon: SiCloudinary,
    level: "Intermediate",
    progress: 80,
    projects: 2,
    description:
      "Cloud media upload, optimization and image management.",
  }

];

/* =========================================================
   DEVELOPMENT TOOLS
========================================================= */

const toolSkills = [

  {
    title: "Git",
icon: FaGitAlt,    level: " Expert",
    progress: 92,
    projects: 8,
    description:
      "Version control, branching, merging and collaboration.",
  },

  {
    title: "GitHub",
icon: FaGithub,
    level: " Expert",
    progress: 95,
    projects: 8,
    description:
      "Repository management, pull requests and deployments.",
  },

  {
    title: "VS Code",
    icon: VscVscode,
    level: "Expert",
    progress: 98,
    projects: 20,
    description:
      "Primary IDE with debugging, extensions and productivity tools.",
  },

  {
    title: "Postman",
icon: SiPostman,
    level: "Intermediate",
    progress: 84,
    projects: 4,
    description:
      "API testing, collections and backend debugging.",
  }

];

/* =========================================================
   ACHIEVEMENTS
========================================================= */

const stats = [

  {
    number: "15+",
    title: "Technologies"
  },

  {
    number: "50+",
    title: "Projects Built"
  },

  {
    number: "3+",
    title: "AI Projects"
  },

  {
    number: "50+",
    title: "DSA Problems"
  }

];

/* =========================================================
   CURRENTLY LEARNING
========================================================= */

const learning = [

  "Next.js",
  "TypeScript",
  "Docker",
  "AWS"

];
/* =========================================================
   COMPONENT
========================================================= */


function Skills() {

const renderSkills = (title, skills) => (

  <div className="skill-category">

    <h2 className="category-title">
      {title}
    </h2>

    <div className="skills-grid">

      {skills.map((skill, index) => {

        const Icon = skill.icon;

        return (

          <div
            className="skill-card"
            key={index}
          >

            <Icon className="skill-icon" />

            <h3 className="skill-title">
              {skill.title}
            </h3>

            <span className="skill-level">
              {skill.level}
            </span>

            <p className="skill-description">
              {skill.description}
            </p>

            

          </div>

        );

      })}

    </div>

  </div>

);

  /* =====================================================
     RETURN
  ===================================================== */

  return (

    <section
      className="skills-container"
      id="skills"
    >

      <div className="skills-wrapper">

        <h2 className="skills-title">
          My Skills
        </h2>

        <p className="skills-subtitle">
          Technologies & tools I use to build modern,
          responsive and scalable web applications.
        </p>

        {/* Frontend */}

        {renderSkills(
          "Frontend Development",
          frontendSkills
        )}

        {/* Backend */}

        {renderSkills(
          "Backend Development",
          backendSkills
        )}

        {/* AI */}

        {renderSkills(
          "AI & APIs",
          aiSkills
        )}

        {/* Tools */}

        {renderSkills(
          "Development Tools",
          toolSkills
        )}

                {/* ==========================
            ACHIEVEMENTS
        ========================== */}

        <div className="stats-section">

          <h2 className="section-title">
            Achievements
          </h2>

          <div className="stats-grid">

            {stats.map((item, index) => (

              <div
                className="stat-card"
                key={index}
              >

                <h3>
                  {item.number}
                </h3>

                <p>
                  {item.title}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* ==========================
            CURRENTLY LEARNING
        ========================== */}

        <div className="learning-section">

          <h2 className="section-title">
            Currently Learning
          </h2>

          <p className="learning-subtitle">
            Continuously improving my skills by learning
            modern technologies and cloud platforms.
          </p>

          <div className="learning-tags">

            {learning.map((item, index) => (

              <span
                key={index}
              >
                {item}
              </span>

            ))}

          </div>

        </div>

      </div>

    </section>

  );

}

export default Skills;