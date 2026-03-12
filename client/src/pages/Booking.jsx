import React, { useState } from 'react';
import './Booking.css';

const Booking = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        serviceTypes: [],
        squareFootage: '',
        leadSource: '',
        comments: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const services = [
        'Commercial Cleaning', 'Residential Cleaning', 'Airbnb Clean',
        'Deep Cleans', 'End-of-Tenancy Cleaning', 'Custom Package'
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            const updatedServices = checked
                ? [...formData.serviceTypes, value]
                : formData.serviceTypes.filter(s => s !== value);
            setFormData({ ...formData, serviceTypes: updatedServices });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setSubmitted(true);
            }
        } catch (err) {
            console.error('Error submitting booking:', err);
        }
    };

    if (submitted) {
        return (
            <div className="booking-page section">
                <div className="container text-center">
                    <div className="success-msg">
                        <i className="fas fa-check-circle"></i>
                        <h2>Booking Request Received!</h2>
                        <p>Thank you for choosing Cleanvestment. We will contact you shortly to confirm your booking and provide a quote.</p>
                        <a href="/" className="btn btn-primary">Back to Home</a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="booking-page">
            <div className="page-header">
                <div className="container">
                    <h1>Book Now</h1>
                    <p>Luxury items deserve luxury care. Tell us what you need.</p>
                </div>
            </div>

            <section className="booking-form-section section">
                <div className="container">
                    <form className="booking-form" onSubmit={handleSubmit}>
                        <div className="form-grid">
                            <div className="form-group">
                                <label>Full Name *</label>
                                <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" />
                            </div>
                            <div className="form-group">
                                <label>Email Address *</label>
                                <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                            </div>
                            <div className="form-group">
                                <label>Phone Number *</label>
                                <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+44 7000 000000" />
                            </div>
                            <div className="form-group">
                                <label>Estimated Square Footage</label>
                                <input type="text" name="squareFootage" value={formData.squareFootage} onChange={handleChange} placeholder="e.g. 2000 sq ft" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Select Services Required</label>
                            <div className="checkbox-grid">
                                {services.map(service => (
                                    <label key={service} className="checkbox-item">
                                        <input
                                            type="checkbox"
                                            name="serviceTypes"
                                            value={service}
                                            checked={formData.serviceTypes.includes(service)}
                                            onChange={handleChange}
                                        />
                                        {service}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="form-group">
                            <label>How did you hear about us?</label>
                            <select name="leadSource" value={formData.leadSource} onChange={handleChange}>
                                <option value="">Select an option</option>
                                <option value="Google">Google</option>
                                <option value="Social Media">Social Media</option>
                                <option value="Referral">Referral</option>
                                <option value="Advertisement">Advertisement</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Additional Comments / Special Requirements</label>
                            <textarea name="comments" value={formData.comments} onChange={handleChange} rows="5" placeholder="Tell us more about your specific needs..."></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Submit Booking Request</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Booking;
