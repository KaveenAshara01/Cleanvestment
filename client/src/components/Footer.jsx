import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-about">
                        <Link to="/" className="logo footer-logo">
                            <img src={logo} alt="Cleanvestment Logo" />
                            <span>Cleanvestment</span>
                        </Link>
                        <p>Luxury cleaning services tailored to your needs. We provide high-end residential and commercial cleaning with a focus on quality and trust.</p>
                        <div className="social-links">
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/booking">Book Now</Link></li>
                        </ul>
                    </div>

                    <div className="footer-services">
                        <h3>Our Services</h3>
                        <ul>
                            <li><Link to="/services/commercial">Commercial Cleaning</Link></li>
                            <li><Link to="/services/residential">Residential Cleaning</Link></li>
                            <li><Link to="/services/deep-clean">Deep Clean</Link></li>
                            <li><Link to="/services/airbnb">Airbnb Clean</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h3>Contact Info</h3>
                        <ul className="contact-list">
                            <li><i className="fas fa-phone"></i> +44 123 456 7890</li>
                            <li><i className="fas fa-envelope"></i> info@cleanvestment.co.uk</li>
                            <li><i className="fas fa-clock"></i> Mon-Sun: 7am - 11pm</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Cleanvestment. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
