import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg px-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Hi, I'm Wafadar Abbas</a>
        <div className="d-flex align-items-center gap-3">
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#skills">Skills</a>
          <a className="nav-link" href="#portfolio">Portfolio</a>
          <a className="nav-link" href="#contact">Contact</a>
          <button className="btn btn-transparent ms-2">Resume</button>
        </div>
      </div>
    </nav>
  );
}
