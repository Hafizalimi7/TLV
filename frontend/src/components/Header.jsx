import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <h1 className="logo">The Life Voyge</h1>
                <nav className="nav">
                    <a href="#about" className="nav-link">About</a>
                    <a href="#contact" className="nav-link">Contact</a>
                    <a href="#services" className="nav-link">Services</a>
                </nav>
                <button className="consultation-btn">Book Free Consultation</button>
            </div>
        </header>
    );
};

export default Header;
