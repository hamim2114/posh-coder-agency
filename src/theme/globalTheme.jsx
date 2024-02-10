import { createTheme } from '@mui/material/styles';

export const globalTheme = (mode) => createTheme({
    palette: {
      mode: mode,
    },
    components: {
      
    },
    typography: {
      // fontFamily: roboto.style.fontFamily,
    },
  });
