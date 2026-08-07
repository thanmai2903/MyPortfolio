import "./Projects.css";

import ThanVerseAI from "../Images/thanverse.png";
import PdfForge from "../Images/pdfforge.png";
import NavNarasimha from "../Images/navnarasimha.png";
import BookingApp from "../Images/booking.png";

import YouTubeClone from "../Images/youtubeclone.png";
import NetflixGPT from "../Images/netflix.png";
import WeatherApp from "../Images/weather.png";
import FoodApp from "../Images/foodapp.png";

function Projects() {

const featuredProjects = [

{
title:"ThanVerse AI",
tag:"Featured AI Project",
image:ThanVerseAI,

description:
"An AI assistant powered by Groq Llama 3.3 featuring intelligent conversations, voice input, Markdown rendering and persistent chat history.",

tech:[
"Next.js",
"TypeScript",
"Tailwind CSS",
"Groq API",
"Markdown"
],

features:[
"AI Chatbot",
"Voice Input",
"Chat History",
"Responsive UI"
],

stats:[
"AI Powered",
"Modern UI",
"Production Ready"
],

github:
"https://github.com/thanmai2903/chatbot-ThanVerseAI",

live:
"https://chatbot-than-verse-ai.vercel.app/"
},

{
title:"PDF Forge",

tag:"SaaS Application",

image:PdfForge,

description:
"A modern SaaS platform for merging, splitting and compressing PDF documents with secure cloud storage.",

tech:[
"Next.js",
"TypeScript",
"Firebase",
"Cloudinary",
"Tailwind CSS"
],

features:[
"Merge PDFs",
"Split PDFs",
"Compress PDFs",
"Google Login"
],

stats:[
"Cloud Storage",
"Authentication",
"Responsive"
],

github:
"https://github.com/thanmai2903/pdf-forge",

live:
"https://pdf-forge-s8iw.vercel.app/"
},

{
title:"NavNarasimha",

tag:"AI Platform",

image:NavNarasimha,

description:
"AI-powered devotional platform featuring Panchang, temple information, multilingual support and intelligent spiritual guidance.",

tech:[
"MERN",
"OpenRouter AI",
"Tailwind CSS",
"AI"
],

features:[
"AI Assistant",
"Panchang",
"Temple Search",
"Multilingual"
],

stats:[
"AI Powered",
"Modern UI",
"Responsive"
],

github:
"https://github.com/thanmai2903/NavNarasimha",

live:"#"
},

{
title:"MERN Booking App",

tag:"Full Stack",

image:BookingApp,

description:
"Hotel booking application with authentication, booking management and secure REST API integration.",

tech:[
"MongoDB",
"Express",
"React",
"Node.js",
"TypeScript"
],

features:[
"JWT Authentication",
"Booking System",
"REST APIs",
"Responsive"
],

stats:[
"CRUD",
"Authentication",
"Full Stack"
],

github:
"https://github.com/thanmai2903/mern-booking-app",

live:"#"
}

];

const otherProjects = [

{
title:"YouTube Clone",

image:YouTubeClone,

description:
"A responsive YouTube-inspired streaming platform with search, video playback and Redux state management.",

tech:[
"React",
"Redux Toolkit",
"Tailwind CSS",
"YouTube API"
],

github:
"https://github.com/thanmai2903/YoutubeApp",

live:
"https://youtube-app-o2c8.vercel.app/"
},

{
title:"Netflix GPT",

image:NetflixGPT,

description:
"Netflix clone featuring Firebase Authentication and AI-powered movie recommendations using GPT.",

tech:[
"React",
"Firebase",
"Redux",
"OpenAI API"
],

github:
"https://github.com/thanmai2903/netflixx-gpt",

live:"#"
},

{
title:"Weather Forecast",

image:WeatherApp,

description:
"Real-time weather application with 5-day forecasting using OpenWeatherMap API.",

tech:[
"React",
"Tailwind CSS",
"OpenWeather API"
],

github:
"https://github.com/thanmai2903/weather-app",

live:
"https://weather-app-hkcb.vercel.app/"
},

{
title:"South Indian Flavors",

image:FoodApp,

description:
"Responsive food ordering platform inspired by Swiggy and Zomato with Firebase Authentication.",

tech:[
"React",
"Firebase",
"Tailwind CSS"
],

github:
"https://github.com/thanmai2903/food-app",

live:
"https://food-app-lrgj.vercel.app/"
}

];

return (

<section className="projects-section" id="projects">

<div className="projects-container">

<h2 className="projects-title">
Projects
</h2>


<h3 className="section-heading">
Featured AI & Full Stack Projects
</h3>

<div className="featured-projects">

{featuredProjects.map((project,index)=>(

<div className="project-card" key={index}>

<div className="project-image">

<img
src={project.image}
alt={project.title}
/>

</div>

<div className="project-content">

<span className="project-category">

{project.tag}

</span>

<h3>

{project.title}

</h3>

<p className="project-description">

{project.description}

</p>

{/* ================= TECH STACK ================= */}

<div className="tech-stack">

  {project.tech.map((tech, i) => (

    <span key={i}>
      {tech}
    </span>

  ))}

</div>

{/* ================= FEATURES ================= */}

<div className="highlight-list">

  {project.features.map((feature, i) => (

    <div
      className="highlight-item"
      key={i}
    >

      ✓ {feature}

    </div>

  ))}

</div>

{/* ================= STATS ================= */}

<div className="project-stats">

  {project.stats.map((stat, i) => (

    <div
      className="stat-box"
      key={i}
    >
      ⭐ {stat}
    </div>

  ))}

</div>

{/* ================= BUTTONS ================= */}

<div className="project-buttons">

  <a
    href={project.live}
    target="_blank"
    rel="noreferrer"
    className="live-btn"
  >

     Live Demo

  </a>

  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className="github-btn"
  >

     GitHub

  </a>

</div>

</div>

</div>

))}
</div>

<h3 className="section-heading">
📦 Other Projects
</h3>

<p className="other-subtitle">

Frontend • API Integration • UI Development • Mini Applications

</p>

<div className="other-projects">

{otherProjects.map((project,index)=>(

<div
className="small-project-card"
key={index}
>

<div className="small-image">

<img
src={project.image}
alt={project.title}
/>

</div>

<div className="small-content">

<h3>

{project.title}

</h3>

<p>

{project.description}

</p>

<div className="small-tech">

{project.tech.map((item,i)=>(

<span key={i}>

{item}

</span>

))}

</div>

<div className="small-buttons">

<a
href={project.live}
target="_blank"
rel="noreferrer"
className="live-btn"
>

Live Demo

</a>

<a
href={project.github}
target="_blank"
rel="noreferrer"
className="github-btn"
>

GitHub

</a>

</div>

</div>

</div>

))}
</div>

{/* ===========================
    GITHUB CTA
=========================== */}

<div className="github-cta">

  <h3>
    Want to see more projects?
  </h3>

  <p>
    Explore my GitHub profile for additional Full Stack, AI,
    React and JavaScript projects that showcase my learning
    journey and development experience.
  </p>

  <a
    href="https://github.com/thanmai2903"
    target="_blank"
    rel="noreferrer"
    className="github-profile-btn"
  >
    View GitHub Profile →
  </a>

</div>

</div>

</section>

);

}

export default Projects;