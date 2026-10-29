import React from "react";

const skillsData = [
  { name: "HTML5", icon: "devicon-html5-plain colored" },
  { name: "CSS3", icon: "devicon-css3-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "React.js", icon: "devicon-react-original colored" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Git and GitHub", icon: "devicon-git-plain colored" },
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "Laravel", icon: "devicon-laravel-original colored" },
  { name: "Supabase", icon: "devicon-postgresql-plain colored" },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="text-center text-teal skills-title">
        My Skills
      </h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card-wrapper">
            <div className="skill-box">
              <i className={`${skill.icon} skill-icon`}></i>
              <h6 className="skill-name">{skill.name}</h6>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
