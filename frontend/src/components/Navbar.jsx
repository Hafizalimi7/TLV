import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css"; // Add the CSS for the Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo or Brand Name */}
        <NavLink to="/" className="navbar-logo">
          <span>MyHealth</span>
        </NavLink>

        {/* Navbar Links */}
        <ul className="navbar-links">
          <li>
            <NavLink
              to="/services"
              className="navbar-link"
              activeClassName="active"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link"
              activeClassName="active"
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
