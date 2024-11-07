import React from 'react';
import { Box, Typography } from '@mui/material';
import Typing from 'react-typing-effect';

const Home: React.FC = () => {
    return (
        <Box
            sx={{
                height: 'calc(100vh - 64px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
            }}
        >
            <Typography variant="h4" component="div" sx={{ textAlign: 'center' }}>
                <Typing
                    text={[
                        'Hey there!',
                        'I’m a Computer Science Graduate based in Atlanta Midtown, Atlanta, GA.',
                    ]}
                    speed={100}
                    eraseSpeed={50}
                    eraseDelay={2000}
                    typingDelay={500}
                />
            </Typography>
        </Box>
    );
};

export default Home;