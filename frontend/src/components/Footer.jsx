import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Footer.css';
import 'font-awesome/css/font-awesome.min.css';

// You can use font-awesome or any other icon library to add the social media icons
const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        {/* Social media icons */}
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fa fa-twitter"></i> 
        </a>
      </div>

      <div className="footer-links">
        <Link to="/" className="footer-link">Home</Link> {/* Links to home */}
        <Link to="/about" className="footer-link">About</Link> {/* Links to /about */}
        <Link to="/services" className="footer-link">Services</Link> {/* Links to /services */}
        <Link to="/contact" className="footer-link">Contact</Link> {/* Links to /contact */}
      </div>

      <div className="copyright">
        <p>© The Life Voyage, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
