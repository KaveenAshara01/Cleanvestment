const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    serviceType: [{ type: String }],
    squareFootage: { type: String },
    leadSource: { type: String },
    comments: { type: String },
    adminDescription: { type: String, default: '' },
    status: {
        type: String,
        enum: ['to contact', 'contacted', 'completed'],
        default: 'to contact'
    },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);
