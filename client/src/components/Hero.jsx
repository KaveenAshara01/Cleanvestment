import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1>Luxury Cleaning, <br /><span>Tailored to You</span></h1>
                <p>Premium cleaning services for high-end residential and commercial spaces. Experience the pinnacle of cleanliness and professional care.</p>
                <div className="hero-btns">
                    <a href="https://cleanvestment.bookingkoala.com/booknow" className="btn btn-primary">Book a Service</a>
                    <Link to="/services/commercial" className="btn btn-secondary">Our Services</Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
