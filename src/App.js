import './App.css';
// import LoginScreen from './Screens/LoginScreen';
import React from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './Components/Header';
import MainContent from './Components/MainComponent';



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
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Header />
          <MainContent />
        </Box>
      </Box>
    </ThemeProvider>
    </>
  );
};

export default App;
