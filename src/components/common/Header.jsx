import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <img
            src="/asset/images/Logo.png"
            alt="VideoBelajar"
            className="logo-img"
          />
        </div>

        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <div className="nav-item">
            <Link
              to="/"
              className={`nav-link ${isActive("/") ? "active" : ""}`}
              onClick={closeMenu}
            >
              Beranda
            </Link>
          </div>
          <div className="nav-item">
            <Link
              to="/login"
              className={`nav-link ${isActive("/login") ? "active" : ""}`}
              onClick={closeMenu}
            >
              Login
            </Link>
          </div>
          <div className="nav-item">
            <Link
              to="/register"
              className={`nav-link ${isActive("/register") ? "active" : ""}`}
              onClick={closeMenu}
            >
              Register
            </Link>
          </div>
        </nav>

        <button
          className={`mobile-menu-btn ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
