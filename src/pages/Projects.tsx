import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import projects from '../data/projects';

const Projects: React.FC = () => {
    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom>
                Projects
            </Typography>
            <Grid container spacing={4}>
                {projects.map((project, index) => (
                    <Grid item xs={12} md={6} lg={4} key={index}>
                        <Card
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                            }}
                        >
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h5">{project.title}</Typography>
                                <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                                    {project.summary}
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 1 }}>
                                    <strong>Technologies:</strong> {project.technologies.join(', ')}
                                </Typography>
                            </CardContent>
                            {project.link && (
                                <Button
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ m: 1, color: 'text.primary', borderColor: 'text.primary' }}
                                    variant="outlined"
                                >
                                    View Project
                                </Button>
                            )}
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Projects;
