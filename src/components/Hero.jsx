import React, { useState, useEffect } from "react";

export default function Hero() {
  const [typewriterText, setTypewriterText] = useState("");
  const fullText = "Software Engineer & Web Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypewriterText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        index = 0;
      }
    }, 140);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center mt-5 pt-4">
      <h1 style={{ fontSize: "4rem", fontWeight: "bold" }}>
        <span style={{ color: "rgb(148, 163, 184)" }}>Hi I'm </span>
        <span className="text-teal">Wafadar Abbas</span>
      </h1>

      <h2 style={{ marginTop: "25px", minHeight: "60px" }} className="text-teal">
        <span id="typewriter">{typewriterText}</span>
        <span className="cursor">|</span>
      </h2>

      <div className="mt-4 px-3" style={{ maxWidth: "850px", margin: "0 auto" }}>
        <h5 style={{ fontSize: "1.2rem", color: "rgb(148, 163, 184)", lineHeight: 1.8 }}>
          Hey! I'm a <span className="text-teal">Full-Stack Developer</span> with a strong passion for scalable web development and expertise across the <span className="text-teal">modern MERN stack</span>.
        </h5>
        <h5 style={{ fontSize: "1.2rem", color: "rgb(148, 163, 184)", lineHeight: 1.8 }}>
          From crafting intuitive frontend interfaces with <span className="text-teal">React</span> to engineering robust backend systems in <span className="text-teal">Node.js and TypeScript</span>, I love turning complex ideas into seamless digital experiences.
        </h5>
        <h5 style={{ fontSize: "1.2rem", color: "rgb(148, 163, 184)", lineHeight: 1.8 }}>
          Take a look around to see my projects and dive into my world of tech innovation!
        </h5>
      </div>

      <div className="text-center social-icons mt-4">
        <a href="https://linkedin.com/in/wafadar-abbas-197051199" target="_blank" rel="noreferrer" className="me-3">
          <i className="fab fa-linkedin fa-3x text-teal"></i>
        </a>
        <a href="https://github.com/WafadarAbbas" target="_blank" rel="noreferrer" className="me-3">
          <i className="fab fa-github fa-3x text-teal"></i>
        </a>
        <a href="mailto:mirzawafadaarali@gmail.com">
          <i className="fas fa-envelope fa-3x text-teal"></i>
        </a>
      </div>
    </div>
  );
}
