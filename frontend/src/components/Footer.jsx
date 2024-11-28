import React from 'react';
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
        <a href="#home" className="footer-link">Home</a>
        <a href="#about" className="footer-link">About</a>
        <a href="#contact" className="footer-link">Contact</a>
      </div>

      <div className="copyright">
        <p>© The Health, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
