import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/contacts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) setSubmitted(true);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="contact-page">
            <div className="page-header">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Get in touch with our expert team today.</p>
                </div>
            </div>

            <section className="contact-section section">
                <div className="container contact-grid">
                    <div className="contact-info">
                        <h2>Get in <span>Touch</span></h2>
                        <p>Have questions about our services or need a custom quote? Our team is here to help.</p>

                        <div className="info-item">
                            <i className="fas fa-phone"></i>
                            <div>
                                <h3>Call Us</h3>
                                <a href="https://wa.me/447917708880" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
                                    <p>+44 7917 708880</p>
                                </a>
                            </div>
                        </div>
                        <div className="info-item">
                            <i className="fas fa-envelope"></i>
                            <div>
                                <h3>Email Us</h3>
                                <a href="mailto:info@cleanvestment.co.uk" style={{ color: "inherit", textDecoration: "none" }}>
                                    <p>info@cleanvestment.co.uk</p>
                                </a>
                            </div>
                        </div>
                        <div className="info-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <div>
                                <h3>Visit Us</h3>
                                <p>London, United Kingdom</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        {submitted ? (
                            <div className="success-msg">
                                <h2>Message Sent!</h2>
                                <p>We'll get back to you as soon as possible.</p>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input type="text" placeholder="Name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="Email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="Subject" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="Message" rows="5" required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            <section className="map-section">
                <iframe
                    title="Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.7281062973!2d-0.2416812853755088!3d51.528771840905595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2slk!4v1689000000000!5m2!1sen!2slk"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </section>
        </div>
    );
};

export default Contact;
