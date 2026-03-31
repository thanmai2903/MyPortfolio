import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    {
      title: "HTML",
      description: "Expert in creating structured and semantic HTML.",
      img: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    },
    {
      title: "CSS",
      description: "Skilled in responsive design and modern layouts.",
      img: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    },
    {
      title: "JavaScript",
      description: "Strong knowledge in building dynamic web applications.",
      img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    },
    {
      title: "React",
      description: "Building scalable UI with reusable components.",
      img: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
    },
    {
      title: "Tailwind CSS",
      description: "Creating modern UI with utility-first CSS.",
      img: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
    },
    {
      title: "Git & GitHub",
      description: "Version control and collaborative development.",
      img: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    },
  ];

  return (
    <section className="skills-container">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            className="skill-card"
            key={index}
            data-desc={skill.description} // 🔥 popup
          >
            <img src={skill.img} alt={skill.title} className="skill-icon" />

            <h3 className="skill-title">{skill.title}</h3>

            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;