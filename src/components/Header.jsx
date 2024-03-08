import React from "react";
import "../styles/header.css";

const NavBar = () => {
  return (
    <header className="nav">
      <ul className="header">
        <a href="#heading" className="nav-item">
          Home
        </a>
        <li>
          <a href="#" className="nav-item">
            About
          </a>
        </li>
        <li>
          <a href="#feature" className="nav-item">
            Experience
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-item">
            Work
          </a>
        </li>
        <li>
          <a href="#contact-me" className="nav-item">
            Contact
          </a>
        </li>
        <li>
          <a
            href="./assets/pdf/KanizFatema.pdf"
            className="your-custom-styles-here"
          >
            Resume
          </a>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
