// src/components/Footer.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                p: 2,
                textAlign: 'center',
                mt: 'auto',
            }}
        >
            <Typography variant="body2" color="textSecondary">
                © 2024 Qidian Gao. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
