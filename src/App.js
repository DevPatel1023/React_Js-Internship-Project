// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateBlog from './Screens/CreateBlog';
import EditScreen from './Screens/EditScreen';
import CreateScreen from './Screens/CreateScreen';
import LoginScreen from './Screens/LoginScreen';
import EditBlog from './Screens/EditBlog';
import React from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Sidebar from './Components/SideBar';
import Header from './Components/Header'; //
import UserProfile from './Screens/UserProfile';
import Account from './Screens/Account';
import BlogList from './Screens/BlogList';
import Card from './Screens/Card';
import BlogDescription from './Screens/BlogDescription';

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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Box sx={{ display: 'flex' }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Router>
              <Routes>
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/edit" element={<EditScreen />} />
                <Route path="/create" element={<CreateScreen />} />
                <Route path="/account" element={<Account />} />
                <Route path="blog/create" element={<CreateBlog />} />
                <Route path="/cards" element={<Card />} />
                <Route path="blog/list" element={<BlogList />} />
                <Route path="blog/detail" element={<BlogDescription />} />
                <Route path="/blog/edit" element={<EditBlog />} />
                <Route path="/login" element={<LoginScreen />} />
              </Routes>
            </Router>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
