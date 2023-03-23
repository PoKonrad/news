import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { createTheme } from '@mui/system';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from './pages/Index';

const theme = createTheme({});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  }
]);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />;
      </ThemeProvider>
    </>
  );
}

export default App;
