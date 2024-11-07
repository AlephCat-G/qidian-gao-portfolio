// src/pages/Experience.tsx
import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    timelineItemClasses,
} from '@mui/lab';

import img1 from '../assets/images/1.jpeg';
import img2 from '../assets/images/2.jpeg';
import img3 from '../assets/images/3.jpeg';
import img4 from '../assets/images/4.png';
import img5 from '../assets/images/5.jpeg';
import img6 from '../assets/images/6.jpeg';
import img7 from '../assets/images/7.png';
import img8 from '../assets/images/8.png';
import img9 from '../assets/images/9.jpeg';

const experiences = [
    {
        period: 'August 2024 - November 2024',
        title: 'Software Engineer Intern at Amazon',
        location: 'Austin, Texas',
        details: [
            'Engineered a content review and management system within Amazon’s Global Content Store.',
            'Developed reusable components and automated tests using React and TypeScript.',
            'Presented the final demo to an audience of 20+ including developers and managers, receiving positive feedback on system design and functionality improvements.',
        ],
        img: img1,
    },
    {
        period: 'September 2022 - November 2022',
        title: 'Software Engineer Intern at Alibaba Group',
        location: 'Hangzhou, China',
        details: [
            "Revamped Alibaba's CRM system within the Sales division, migrating it from AngularJS to a modern React and TailwindCSS stack.",
            'Built modular CRM components with 50+ automated tests using Selenium and React Testing Library.',
            'Resolved 20+ critical issues and improved system reliability.',
        ],
        img: img2,
    },
    {
        period: 'June 2022 - September 2022',
        title: 'Autonomous Solutions Intern at BOSCH',
        location: 'Suzhou, China',
        details: [
            'Developed an executable for managing supply chain group inventory spreadsheets, reducing daily planning workload from 1 day to nearly 2 hours.',
            'Contributed to the optimization of automated driving by debugging firmware for radars, sensors, and other components using Java.',
        ],
        img: img3,
    },
    {
        period: 'August 2023 - December 2024',
        title: "Master's, Computer Science at Georgia Institute of Technology",
        location: 'Atlanta, GA, USA',
        details: [
            'GPA: 3.6, ranked No.4 on csrankings.org in Computational Science and Engineering.',
            'Coursework: Data Structure, High Performance Computing, Algorithm, Machine Learning, Data Engineering.',
        ],
        img: img4,
    },
    {
        period: 'September 2019 - June 2023',
        title: "Bachelor's, Industrial Engineering at Soochow University",
        location: 'Suzhou, China',
        details: [
            'GPA: 3.88, awarded 3 years of scholarships for Spiritual Civilization, Entrepreneurship, and Excellence in Learning.',
            'Coursework: Operations Research, Inventory Theory, Linear Programming, Supply Chain Management.',
        ],
        img: img5,
    },
    {
        period: 'November 2021 - April 2022',
        title: 'Student Researcher under Dr. Peng LIU, AP of National University of Singapore',
        location: 'Remote',
        details: [
            'Optimized TSP algorithms for courier routes in a supply chain simulation across 31 cities.',
            'Conducted literature review, data cleaning, and fine-tuning for Bayesian reinforcement learning in TSP algorithms.',
        ],
        img: img6,
    },
    {
        period: 'April 2022',
        title: "COMAP’s Mathematical Contest in Modeling (Meritorious Winner - Top 9%)",
        location: 'USA Nationwide',
        details: [
            'Developed a sophisticated LSTM model to predict gold and Bitcoin prices using millions of transactions from 2005-2016.',
            'Implemented a dynamic programming model for high-frequency trading strategy, achieving a simulated revenue of $5 billion.',
        ],
        img: img7,
        paperLink: '/paper.pdf',
    },
    {
        period: '2023.8',
        title: "Unstoppable Project - Student Non-Profit CTO",
        location: 'Global Platform for Asian International Students',
        details: [
            'Managed a global platform for Asian students, offering mentorship, articles, and study partner matching.',
            'Grew user base to 500+ active members, achieving a 30% increase in engagement through UI/UX improvements and personalized content.',
        ],
        img: img8,
    },
    {
        period: '2020 - 2022',
        title: 'Chair of School Debate Team',
        location: 'Soochow University, China',
        details: [
            'Organized the Freshman Debate Competition and Orientation in 2020, receiving Outstanding Student Leader Award in 2022.',
            'Led and mentored peers, fostering a collaborative and inquisitive environment for debate and discussion.',
        ],
        img: img9,
    },
];

const Experience: React.FC = () => {
    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4">Experience</Typography>
            <Timeline
                sx={{
                    mt: 2,
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                    },
                }}
            >
                {experiences.map((exp, index) => (
                    <TimelineItem key={index}>
                        <TimelineSeparator>
                            <TimelineDot color="primary" />
                            {index < experiences.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={3}>
                                    <Box
                                        component="img"
                                        src={exp.img}
                                        alt={exp.title}
                                        sx={{
                                            width: '270px',
                                            height: '150px',
                                            objectFit: 'cover',
                                            borderRadius: '8px',
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={9}>
                                    <Typography variant="h6">{exp.title}</Typography>
                                    <Typography variant="subtitle2">
                                        {exp.period} | {exp.location}
                                    </Typography>
                                    <ul>
                                        {exp.details.map((detail, idx) => (
                                            <li key={idx}>
                                                <Typography variant="body2">{detail}</Typography>
                                            </li>
                                        ))}
                                    </ul>
                                    {exp.paperLink && (
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            href={exp.paperLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{ mt: 1 }}
                                        >
                                            View Full Paper
                                        </Button>
                                    )}
                                </Grid>
                            </Grid>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </Box>
    );
};

export default Experience;
