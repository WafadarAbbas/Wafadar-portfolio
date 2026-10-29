import React from "react";

export default function About() {
  return (
    <section id="about" className="p-5 mt-5 container">
      <div className="d-flex flex-column align-items-center">
        <div className="profile-avatar">
          <img
            src="https://yqfkxvqxiuvwyavcfqcd.supabase.co/storage/v1/object/public/Portfolio/Mirz.jpeg"
            alt="Wafadar Abbas"
            className="profile-avatar-img"
          />
        </div>
        <h2 className="mt-4 text-center text-teal" style={{ fontWeight: "bold" }}>About Me</h2>
        <h5 className="mt-3 text-center" style={{ maxWidth: "800px", lineHeight: 1.8 }}>
          I'm a passionate and eager-to-learn Software Engineer with a strong interest in web development. 
          I am keen to enhance my skills in modern JavaScript technologies, especially React, Next.js, and Node.js. 
          My goal is to build clean, efficient, and dynamic web applications while continuously learning and improving.
        </h5>
      </div>
    </section>
  );
}
