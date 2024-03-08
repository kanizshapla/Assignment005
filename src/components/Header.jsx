import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const NavBar = () => {
  return (
    <header className="nav">
      <ul className="header">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <li>
          <Link to="/profile" className="nav-item">
            About
          </Link>
        </li>
        <li>
          <Link to="/experience" className="nav-item">
            Experience
          </Link>
        </li>
        <li>
          <Link to="/project-data" className="nav-item">
            Work
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-item">
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
