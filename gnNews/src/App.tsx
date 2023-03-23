import { ThemeProvider } from '@mui/system';
import { CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from './pages/Index';

const theme = createTheme({
  palette: {
    mode: 'light'
  }
});

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
