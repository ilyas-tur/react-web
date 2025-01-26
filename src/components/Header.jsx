import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <h1 className="logo">
          <Link to="/test">BookStore</Link>
        </h1>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
