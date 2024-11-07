import React from 'react';
import { Box, Typography, Button, Chip, Grid } from '@mui/material';
import { Download } from '@mui/icons-material';

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
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">About Me</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        I'm a Master's student in Computer Science at Georgia Tech with a passion for data engineering and optimization.
        I have interned at leading companies like Amazon, BOSCH, and Alibaba. In my free time, I enjoy playing piano and badminton.
      </Typography>

      <Typography variant="h5" sx={{ mt: 4 }}>Skills</Typography>
      <Grid container spacing={1} sx={{ mt: 1 }}>
        {skills.map((skill) => (
          <Grid item key={skill}>
            <Chip label={skill} />
          </Grid>
        ))}
      </Grid>

      <Button
        variant="contained"
        color="primary"
        startIcon={<Download />}
        sx={{ mt: 4 }}
        href="/assets/resume.pdf"
        target="_blank"
      >
        Download Resume
      </Button>
    </Box>
  );
};

export default About;