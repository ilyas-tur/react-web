import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/header.css";
import { ROUTES } from "../../utils/consts";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`${ROUTES.SEARCH}?query=${searchQuery}`);
    }
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <h1 className="logo">
          <Link to="/test">BookStore</Link>
        </h1>
        <ul className="nav-links">
          <li>
            <Link to={ROUTES.HOME} className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to={ROUTES.ABOUT} className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to={ROUTES.CONTACT} className="nav-link">
              Contact
            </Link>
          </li>
          <li>
            <Link to={ROUTES.FAVORITES} className="nav-link">
              Favorites
            </Link>
          </li>
        </ul>

        <form onSubmit={handleSearch} className="header-search-form">
          <input
            type="text"
            placeholder="Search books..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="header-search-input"
          />
          <button type="submit" className="header-search-button">
            Search
          </button>
        </form>
      </nav>
    </header>
  );
};

export default Header;
