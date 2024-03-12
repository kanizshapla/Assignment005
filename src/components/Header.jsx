import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`nav ${menuOpen ? "menu-open" : ""}`}>
      <div className="menu-toggle" onClick={handleMenuToggle}>
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
      <ul className={`header ${menuOpen ? "menu-open" : ""}`}>
        <Link to="/" className="nav-item" onClick={handleMenuToggle}>
          Home
        </Link>
        <li>
          <Link to="/profile" className="nav-item" onClick={handleMenuToggle}>
            About
          </Link>
        </li>
        <li>
          <Link
            to="/experience"
            className="nav-item"
            onClick={handleMenuToggle}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            to="/project-data"
            className="nav-item"
            onClick={handleMenuToggle}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-item" onClick={handleMenuToggle}>
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
