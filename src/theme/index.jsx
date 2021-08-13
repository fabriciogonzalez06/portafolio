import { createTheme } from '@material-ui/core/styles';
//import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import cyan from '@material-ui/core/colors/cyan';

export const theme = createTheme({
    palette: {
        primary: {
            main: cyan[500],
        },
        secondary: {
            main: green[500],
        },
    },
});

