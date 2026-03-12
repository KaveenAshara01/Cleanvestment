import React from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css';

const ResidentialCleaning = () => {
    return (
        <div className="service-detail-page">
            <div className="page-header residential-header">
                <div className="container">
                    <h1>Residential Cleaning</h1>
                    <p>Excellence in every corner of your home.</p>
                </div>
            </div>

            <section className="service-info section">
                <div className="container service-grid">
                    <div className="service-text">
                        <h2>Luxury Care for <span>Your Sanctuary</span></h2>
                        <p>Your home is your sanctuary, and it deserves the highest level of care. Our residential cleaning services are designed for luxury homes, focusing on meticulous attention to detail and the use of premium products.</p>

                        <div className="service-features">
                            <div className="feature-item">
                                <i className="fas fa-couch"></i>
                                <div>
                                    <h3>Living Areas</h3>
                                    <p>Dusting, polishing, and sanitizing all surfaces to perfection.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-utensils"></i>
                                <div>
                                    <h3>Kitchen & Dining</h3>
                                    <p>Sparkling clean appliances, countertops, and floors.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-bath"></i>
                                <div>
                                    <h3>Bathrooms</h3>
                                    <p>Deep cleaning and sanitizing for a spa-like experience.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-bed"></i>
                                <div>
                                    <h3>Bedrooms</h3>
                                    <p>Fresh, clean spaces for ultimate relaxation.</p>
                                </div>
                            </div>
                        </div>

                        <Link to="/booking" className="btn btn-primary">Book This Service</Link>
                    </div>
                    <div className="service-sidebar">
                        <div className="sidebar-widget">
                            <h3>Tailored to You</h3>
                            <p>Every home is unique. We customize our cleaning checklist to meet your specific preferences and needs.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ResidentialCleaning;
