import React from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css';

const AirbnbClean = () => {
    return (
        <div className="service-detail-page">
            <div className="page-header airbnb-header">
                <div className="container">
                    <h1>Airbnb Cleaning</h1>
                    <p>5-star turnover services for short-term rentals.</p>
                </div>
            </div>

            <section className="service-info section">
                <div className="container service-grid">
                    <div className="service-text">
                        <h2>Luxury Standards for <span>Your Guests</span></h2>
                        <p>Impress your guests with a pristine environment from the moment they walk in. Our Airbnb cleaning service is tailored for high-end short-term rentals, ensuring consistent 5-star quality and reliable turnovers.</p>

                        <div className="service-features">
                            <div className="feature-item">
                                <i className="fas fa-sync-alt"></i>
                                <div>
                                    <h3>Fast Turnover</h3>
                                    <p>Reliable cleaning schedules to meet check-in/check-out times.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-soap"></i>
                                <div>
                                    <h3>Linen & Laundry</h3>
                                    <p>Professional handling of linens and towels for a luxury feel.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-check-double"></i>
                                <div>
                                    <h3>Staging & Prep</h3>
                                    <p>Arranging towels, toiletries, and amenities for the perfect guest arrival.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <i className="fas fa-camera"></i>
                                <div>
                                    <h3>Reporting</h3>
                                    <p>Photo documentation and low-stock alerts for your peace of mind.</p>
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

export default AirbnbClean;
