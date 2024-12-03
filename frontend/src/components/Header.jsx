import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1 className="logo">
                <Link to="/">The Life Voyage</Link> {/* Home link using React Router */}
            </h1>
            <div className="nav-group">
                <nav className="nav">
                    <Link to="/about" className="nav-link">About</Link> {/* Links to /about */}
                    <Link to="/services" className="nav-link">Services</Link> {/* Links to /services */}
                    <Link to="/contact" className="nav-link">Contact</Link> {/* Links to /contact */}
                </nav>
                <Link to="/contact">
                    <button className="consultation-btn">Book Free Consultation</button>
                </Link>
            </div>
        </header>
    );
};

export default Header;
