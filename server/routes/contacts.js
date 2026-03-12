const express = require('express');
const router = express.Router();

// Post a new contact message (Logging only as requested)
router.post('/', async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Placeholder for real email integration (e.g. Nodemailer)
    console.log('--- New Contact Message Received ---');
    console.log(`From: ${name} (${email})`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
    console.log('------------------------------------');

    res.status(200).json({ message: 'Message received and logged.' });
});

module.exports = router;
