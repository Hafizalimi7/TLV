import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the email submission
    alert(`Signed up with email: ${email}`);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Explore</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/services">Services</Link></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="mailto:example@example.com">Email</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>

        <div className="footer-signup">
          <h3>Sign Up</h3>
          <p>Sign up with your email address to receive news and updates.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </footer>
  );
};
