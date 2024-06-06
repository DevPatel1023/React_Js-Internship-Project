import React from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import MainContent from './Components/MainComponent';
import Sidebar from './Components/SideBar';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

const App = () => {
  return (
    <>
      {/* <LoginScreen /> */}
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <MainContent />
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
