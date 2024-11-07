import React from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';

const Contact: React.FC = () => {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission logic here
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
                        <TextField label="Name" name="name" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Email" name="email" type="email" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Message" name="message" multiline rows={4} fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" type="submit">
                            Send Message
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default Contact;