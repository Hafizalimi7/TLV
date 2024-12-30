import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1 className="logo">
                <Link to="/">
                <img 
                    src="/images/logo.png" 
                    alt="The Life Voyage Logo" 
                    className="logo-image" 
                />
                </Link> 
            </h1>
            <div className="nav-group">
                <nav className="nav">
                    <Link to="/about" className="nav-link">About</Link> {/* Links to /about */}
                    <Link to="/services" className="nav-link">Services</Link> {/* Links to /services */}
                    <Link to="/contact" className="nav-link">Contact</Link> {/* Links to /contact */}
                </nav>
                <a href="https://calendly.com/tanyafeuillet/30min" target="_blank" rel="noopener noreferrer">
                     <button className="consultation-btn">Book Free Consultation</button>
                </a>
            </div>
        </header>
    );
};

export default Header;
