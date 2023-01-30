/* eslint-disable react/react-in-jsx-scope */
import styled from '@emotion/styled';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes/Routes';
import theme from './Theme/Theme';

const Wrapper = styled(Box)`
  background-color: #EEF2FE;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <CssBaseline />
        <RouterProvider router={router} />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
