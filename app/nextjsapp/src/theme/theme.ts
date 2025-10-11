import { createTheme } from '@mui/material/styles';
import { indigo, teal } from '@mui/material/colors';


const theme = createTheme({
  palette: {
    primary: {
      main: "#fffffc",
      contrastText: '#000000',
    },
    secondary: {
      main: teal[500],
      light: teal[50],
      dark: teal[900],
    },
  },
  typography: {
    h4: {
      color: "#ffffff",
      fontSize:'80px',
    },
    h6: {
      color: "#ffffff",
      fontSize:'16px',
    },
    button: {
      fontWeight: '700',
    },
    caption: {
      fontWeight: '700',
    },
    body2: {
      fontWeight: '700',
    },
  },
  components: {
    MuiMobileStepper: {
      styleOverrides: {
        dotActive: {
          backgroundColor: teal[500],
        },
        dots: {
          display: "none"
        }
      },
    },
  }
});

export default theme;
