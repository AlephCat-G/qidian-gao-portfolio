// src/pages/About.tsx
import React from 'react';
import { Box, Typography, Grid, Chip, Avatar, Button } from '@mui/material';
import profilePic from '../assets/images/profile.jpeg';

const skills = [
    'Python',
    'R',
    'SQL',
    'React',
    'TypeScript',
    'C++',
    'MATLAB',
    'Java',
    'Git',
    'CI/CD',
    'Tableau',
    'Scikit-learn',
];

const About: React.FC = () => {
    return (
        <Box sx={{ p: { xs: 2, md: 4 } }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
                About Me
            </Typography>

            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <Avatar
                        alt="Gwen Gao"
                        src={profilePic}
                        sx={{
                            width: 200,
                            height: 200,
                            margin: '0 auto',
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                        }}
                    />
                </Grid>

                <Grid item xs={12} md={8}>
                    <Typography variant="body1" paragraph sx={{ color: '#555' }}>
                        Hey there! I’m a passionate Computer Science graduate based in Atlanta Midtown, Atlanta, GA.
                    </Typography>

                    <Typography variant="body1" paragraph>
                        <strong>Name:</strong> <span style={{ color: '#000' }}>Gwen Gao</span>
                        <br />
                        <strong>Address:</strong> <span style={{ color: '#000' }}>788 W Marietta ST NW, Atlanta, GA</span>
                        <br />
                        <strong>Birthdate:</strong> <span style={{ color: '#000' }}>November 18, 2001 (22 years old)</span>
                        <br />
                        <strong>Interests:</strong> <span style={{ color: '#000' }}>Piano, Badminton, Sociology, tackling complex problems.</span>
                    </Typography>

                    <Typography variant="body1" paragraph sx={{ color: '#555', mt: 2 }}>
                        With a commitment to making a positive impact in the tech world and beyond, I have:
                    </Typography>
                    <Typography variant="body1" component="ul" sx={{ color: '#555' }}>
                        <li>Over 270 hours of undergraduate volunteering experience.</li>
                        <li>Active involvement in promoting and supporting Women in Tech initiatives.</li>
                        <li>Served as a GT Roll Call volunteer in the Student Engagement Center.</li>
                        <li>Worked as an on-campus math tutor, helping students strengthen their mathematical foundations.</li>
                    </Typography>

                    {/* Resume Button */}
                    <Button
                        variant="contained"
                        color="primary"
                        href="/CS RESUME QIDIAN GAO.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ mt: 3 }}
                    >
                        View Resume
                    </Button>
                </Grid>
            </Grid>

            <Typography variant="h5" sx={{ mt: 4, fontWeight: 'bold', color: '#333' }}>
                Skills
            </Typography>

            <Grid container spacing={1} sx={{ mt: 1 }}>
                {skills.map((skill) => (
                    <Grid item key={skill}>
                        <Chip label={skill} sx={{ color: 'white', backgroundColor: '#555' }} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default About;
