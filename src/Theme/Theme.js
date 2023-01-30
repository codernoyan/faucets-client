/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
import { createTheme } from '@mui/material';

const theme = createTheme({
  pallete: {
    primary: {
      main: '#9B1FE9',
    },
  },
  typography: {
    fontFamily: [
      'Varela Round', 'sans-serif',
    ].join(','),
  },
});

export default theme;
