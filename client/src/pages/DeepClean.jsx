import React from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css';

const DeepClean = () => {
    return (
        <div className="service-detail-page">
            <div className="page-header deep-header">
                <div className="container">
                    <h1>Deep Cleaning</h1>
                    <p>Absolute attention to every single detail.</p>
                </div>
            </div>

            <section className="service-info section">
                <div className="container service-grid">
                    <div className="service-text">
                        <h2>Deep Cleaning for <span>Ultimate Freshness</span></h2>
                        <p>Our deep cleaning service goes beyond the surface to tackle hidden grime and allergens. Perfect for seasonal cleaning, move-in/move-out, or after a renovation project.</p>

                        <div className="service-features">
                            <div className="feature-item">
                                <i className="fas fa-broom"></i>
                                <div>
                                    <h3>Baseboards & Moldings</h3>
                                    <p>Thorough cleaning of often-overlooked areas.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-wind"></i>
                                <div>
                                    <h3>Air Vents & Filters</h3>
                                    <p>Removing dust and improving indoor air quality.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-th-large"></i>
                                <div>
                                    <h3>Tile & Grout</h3>
                                    <p>Restoring the original shine to your tiled surfaces.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-lightbulb"></i>
                                <div>
                                    <h3>Light Fixtures</h3>
                                    <p>Hand-wiping and polishing for maximum brightness.</p>
                                </div>
                            </div>
                        </div>

                        <a href="https://cleanvestment.bookingkoala.com/booknow" className="btn btn-primary">Book This Service</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DeepClean;
