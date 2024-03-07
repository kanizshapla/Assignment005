import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="nav">
      <ul className="header">
        <a href="#heading" className="your-custom-styles-here">
          Home
        </a>
        <li>
          <a href="#" className="your-custom-styles-here">
            About
          </a>
        </li>
        <li>
          <a href="#feature" className="your-custom-styles-here">
            Experience
          </a>
        </li>
        <li>
          <a href="#projects" className="your-custom-styles-here">
            Work
          </a>
        </li>
        <li>
          <a href="#contact-me" className="your-custom-styles-here">
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

export default Header;
