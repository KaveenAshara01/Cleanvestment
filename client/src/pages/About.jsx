import React from 'react';
import Hero from '../components/Hero'; // We might use a small hero or header
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about-page">
            <div className="page-header">
                <div className="container">
                    <h1>About Us</h1>
                    <p>A legacy of excellence in luxury cleaning.</p>
                </div>
            </div>

            <section className="about-details section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-image">
                            <img src="/about.png" alt="Cleanvestment Team" />
                        </div>
                        <div className="about-text">
                            <h2>Our <span>Mission</span></h2>
                            <p>Founded on the principles of integrity, quality, and exceptional service, Cleanvestment has grown to become a leader in luxury cleaning services. We treat every space with the same care and attention we would give our own homes.</p>
                            <p>Our goal is to provide a seamless, stress-free cleaning experience that allows you to focus on what matters most to you, while enjoying a pristine environment.</p>

                            <h3>Our Commitment</h3>
                            <p>We are committed to using the latest cleaning technologies and eco-friendly products to ensure a safe and healthy environment for our clients and their assets.</p>

                            <div className="service-areas mt-4">
                                <h3>Areas We Serve</h3>
                                <p>We proudly offer our luxury cleaning services across the following areas:</p>
                                <ul className="check-list">
                                    <li><i className="fas fa-map-marker-alt"></i> Nottingham</li>
                                    <li><i className="fas fa-map-marker-alt"></i> Derby</li>
                                    <li><i className="fas fa-map-marker-alt"></i> Leicester</li>
                                    <li><i className="fas fa-map-marker-alt"></i> Mansfield</li>
                                    <li><i className="fas fa-map-marker-alt"></i> East Midlands</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="stats-section section bg-light">
                <div className="container text-center">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <h2>5+</h2>
                            <p>Years Experience</p>
                        </div>
                        <div className="stat-item">
                            <h2>500+</h2>
                            <p>Happy Clients</p>
                        </div>
                        <div className="stat-item">
                            <h2>50+</h2>
                            <p>Expert Staff</p>
                        </div>
                        <div className="stat-item">
                            <h2>100%</h2>
                            <p>Satisfaction Rate</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
