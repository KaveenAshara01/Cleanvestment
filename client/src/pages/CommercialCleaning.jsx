import React from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css';

const CommercialCleaning = () => {
    return (
        <div className="service-detail-page">
            <div className="page-header commercial-header">
                <div className="container">
                    <h1>Commercial Cleaning</h1>
                    <p>Professional solutions for a spotless workspace.</p>
                </div>
            </div>

            <section className="service-info section">
                <div className="container service-grid">
                    <div className="service-text">
                        <h2>Luxury Cleaning for <span>Professional Spaces</span></h2>
                        <p>We provide comprehensive cleaning solutions for various commercial facilities. Our team is trained to handle the specific needs of high-traffic professional environments while maintaining the highest standards of discretion and quality.</p>

                        <div className="service-features">
                            <div className="feature-item">
                                <i className="fas fa-hospital"></i>
                                <div>
                                    <h3>Healthcare Facilities</h3>
                                    <p>Specialized cleaning and sanitization for medical offices and clinics.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-store"></i>
                                <div>
                                    <h3>Retail Stores</h3>
                                    <p>Maintaining a pristine shopping environment for your customers.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-university"></i>
                                <div>
                                    <h3>Educational Facilities</h3>
                                    <p>Safe and clean environments for students and staff.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-landmark"></i>
                                <div>
                                    <h3>Financial Institutions</h3>
                                    <p>Secure and professional cleaning for banks and corporate offices.</p>
                                </div>
                            </div>
                        </div>

                        <a href="https://cleanvestment.bookingkoala.com/booknow" className="btn btn-primary">Book This Service</a>
                    </div>
                    <div className="service-sidebar">
                        <div className="sidebar-widget">
                            <h3>Our Commitment</h3>
                            <p>We are committed to delivering exceptional quality with every visit. Your satisfaction is our top priority.</p>
                        </div>
                        <div className="sidebar-widget">
                            <h3>Operating Hours</h3>
                            <ul>
                                <li>Mon-Fri: 7am - 11pm</li>
                                <li>Sat-Sun: 7am - 11pm</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CommercialCleaning;
