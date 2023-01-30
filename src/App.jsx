/* eslint-disable react/react-in-jsx-scope */
import { CssBaseline, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes/Routes';
import theme from './Theme/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <CssBaseline />
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
