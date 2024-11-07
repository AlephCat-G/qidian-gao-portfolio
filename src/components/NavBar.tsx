// src/components/NavBar.tsx
import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    useMediaQuery,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const NavBar: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [openDrawer, setOpenDrawer] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };
    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };

    const navLinks = [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Experience', path: '/experience' },
        { title: 'Projects', path: '/projects' },
        { title: 'Contact', path: '/contact' },
    ];

    return (
        <AppBar
            position="sticky"
            sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.8)', // Black with 80% opacity
                color: 'text.primary', // Ensure text is readable on dark background
            }}
            elevation={0}
        >
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1, color: 'white' }}>
                    Gwen Gao
                </Typography>
                {isMobile ? (
                    <>
                        <IconButton color="inherit" onClick={handleDrawerOpen}>
                            <Menu />
                        </IconButton>
                        <Drawer
                            anchor="right"
                            open={openDrawer}
                            onClose={handleDrawerClose}
                        >
                            <List>
                                {navLinks.map((item) => (
                                    <ListItemButton
                                        key={item.title}
                                        component={Link}
                                        to={item.path}
                                        onClick={handleDrawerClose}
                                    >
                                        <ListItemText primary={item.title} />
                                    </ListItemButton>
                                ))}
                            </List>
                        </Drawer>
                    </>
                ) : (
                    navLinks.map((item) => (
                        <Button
                            color="inherit"
                            component={Link}
                            to={item.path}
                            key={item.title}
                            sx={{ color: 'white' }}
                        >
                            {item.title}
                        </Button>
                    ))
                )}
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
