import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ title, description, icon, link }) => {
    return (
        <div className="service-card">
            <div className="service-card-icon">
                <i className={`fas ${icon}`}></i>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to={link} className="service-card-link">Read More <i className="fas fa-arrow-right"></i></Link>
        </div>
    );
};

export default ServiceCard;
