import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000000', // Black
        },
        secondary: {
            main: '#7f7f7f', // Gray
        },
        background: {
            default: '#ffffff', // White
        },
        text: {
            primary: '#000000',
            secondary: '#7f7f7f',
        },
    },
});

export default theme;
