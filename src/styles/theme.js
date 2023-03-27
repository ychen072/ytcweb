import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: 'rgb(0,35,102)',
            dark: 'rgb(0,25,74)',
            light: 'rgb(0,71,207)'
        },
        secondary: {
            main: '#FFFFFF',
        },
        background: {
            main: 'rgb(0,35,102)',
            dark: 'rgb(0,25,74)',
            light: 'rgb(0,71,207)'
        },
        error: {
            main: red.A400,
        },
    },
});

export default theme;