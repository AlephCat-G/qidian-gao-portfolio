require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { sendEmail } = require('./sendEmail');
const app = express();

app.use(bodyParser.json());

app.post('/api/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        await sendEmail(
            'moyunaquamarine@gmail.com',
            `Message from ${name} <${email}>`,
            message
        );
        res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error in sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
