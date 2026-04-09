import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
            <div className="container nav-content">
                <Link to="/" className="logo">
                    <img src="/cleanvestment_logo_transparent.png" alt="Cleanvestment Logo" />
                </Link>

                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
                    <li className="dropdown">
                        <span className="dropdown-trigger">Services</span>
                        <ul className="dropdown-menu">
                            <li><Link to="/services/commercial" onClick={() => setIsMenuOpen(false)}>Commercial Cleaning</Link></li>
                            <li><Link to="/services/residential" onClick={() => setIsMenuOpen(false)}>Residential Cleaning</Link></li>
                            <li><Link to="/services/deep-clean" onClick={() => setIsMenuOpen(false)}>Deep Clean</Link></li>
                            <li><Link to="/services/airbnb" onClick={() => setIsMenuOpen(false)}>Airbnb Clean</Link></li>
                        </ul>
                    </li>
                    <li><a href="https://cleanvestment.bookingkoala.com/contact-us" onClick={() => setIsMenuOpen(false)}>Contact Us</a></li>
                    <li><a href="https://cleanvestment.bookingkoala.com/booknow" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>Book Now</a></li>
                </ul>

                <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
