import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';
import axios from 'axios';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        try {
            const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api/send-email';
            const response = await axios.post(API_URL, formData);
            if (response.data.success) {
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' }); // Clear form
            } else {
                alert('Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Error sending message');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{ p: { xs: 2, md: 4 } }}>
            <Typography variant="h4" gutterBottom>
                Contact Me
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
                Feel free to reach out via email or connect with me on LinkedIn and GitHub.
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} sx={{ maxWidth: 600 }}>
                    <Grid item xs={12}>
                        <TextField
                            label="Name"
                            name="name"
                            fullWidth
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            fullWidth
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Message"
                            name="message"
                            multiline
                            rows={4}
                            fullWidth
                            required
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default Contact;
