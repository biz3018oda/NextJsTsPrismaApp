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
  }
});

export default theme;
