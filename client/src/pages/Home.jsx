import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import './Home.css';

const Home = () => {
    const services = [
        {
            title: 'Commercial Cleaning',
            description: 'Professional cleaning for offices, retail stores, and healthcare facilities.',
            icon: 'fa-building',
            link: '/services/commercial'
        },
        {
            title: 'Residential Cleaning',
            description: 'Exceptional cleaning for luxury homes, ensuring a pristine living environment.',
            icon: 'fa-home',
            link: '/services/residential'
        },
        {
            title: 'Deep Cleans',
            description: 'Move-in/move-out and seasonal deep cleaning services with absolute attention to detail.',
            icon: 'fa-broom',
            link: '/services/deep-clean'
        },
        {
            title: 'Airbnb Cleaning',
            description: 'Specialized turnover services for short-term rentals, maintaining 5-star standards.',
            icon: 'fa-bed',
            link: '/services/airbnb'
        }
    ];

    return (
        <div className="home-page">
            <Hero />

            <section className="about-section section">
                <div className="container about-grid">
                    <div className="about-image">
                        <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="About Cleanvestment" />
                    </div>
                    <div className="about-text">
                        <h4 className="subtitle">ABOUT US</h4>
                        <h2>05 Years of Experience in <span>Luxury Cleaning</span></h2>
                        <p>At Cleanvestment, we understand that cleanliness is not just about appearances—it's about health, comfort, and professional standards. Our team of experienced professionals is dedicated to providing tailored cleaning solutions for high-end clients.</p>
                        <ul className="check-list">
                            <li><i className="fas fa-check-circle"></i> Professional & Trained Staff</li>
                            <li><i className="fas fa-check-circle"></i> Quality Cleaning Tools & Eco-friendly Products</li>
                            <li><i className="fas fa-check-circle"></i> Tailored Solutions for Every Client</li>
                        </ul>
                        <a href="/about" className="btn btn-secondary">Read More About Us</a>
                    </div>
                </div>
            </section>

            <section className="services-section section bg-light">
                <div className="container">
                    <div className="section-header text-center">
                        <h4 className="subtitle">OUR SERVICES</h4>
                        <h2>Expert Cleaning <span>For You</span></h2>
                        <p>We provide a wide range of specialized cleaning services to meet your specific requirements.</p>
                    </div>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="testimonials-section section">
                <div className="container">
                    <div className="section-header text-center">
                        <h4 className="subtitle">TESTIMONIALS</h4>
                        <h2>What Our <span>Clients Say</span></h2>
                    </div>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p>"The best cleaning service I've ever used. Their attention to detail in my luxury apartment was astounding."</p>
                            <div className="client-info">
                                <h4>Sarah Jenkins</h4>
                                <span>Residential Client</span>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p>"Professional, reliable, and thorough. Cleanvestment keeps our office looking pristine every single day."</p>
                            <div className="client-info">
                                <h4>David Chen</h4>
                                <span>Commercial Client</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section section">
                <div className="container text-center">
                    <h2>Ready to Experience <span>Standard Cleanliness?</span></h2>
                    <p>Book your professional cleaning service today and enjoy a pristine environment.</p>
                    <a href="/booking" className="btn btn-primary">Get a Free Quote Now</a>
                </div>
            </section>
        </div>
    );
};

export default Home;
