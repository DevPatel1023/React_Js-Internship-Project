import React from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import MainContent from './Components/MainComponent';
import './App.css';
import UserProfile from'./Components/User/UserProfile';
import UserList from './Components/User/UserList';
import UserCards from './Components/User/UserCards';
import UserCreate from './Components/User/UserCreate';
import UserEdit from './Components/User/UserEdit';
import UserAccount from './Components/User/UserAccount';
import Blog from './Components/Blog/BlogList';
import BlogDetails from './Components/Blog/BlogDetails';
import BlogCreate from './Components/Blog/BlogCreate';
import BlogEdit from './Components/Blog/BlogEdit';

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', height: '100vh', flexDirection: { xs: 'column', md: 'row' } }}> 
          <Header /> 
          <Box 
            sx={{ 
              flexGrow: 1, 
              p: 3, 
              overflowY: 'auto', // Enable scrolling for main content
              height: '100%', // Take up full available space
              marginTop: { xs: '64px', md: 0 } // Account for header height on smaller screens
            }}
          >
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/User/profile" element={<UserProfile />} />
              <Route path="/User/List" element={<UserList />} />
              <Route path="/User/Cards" element={<UserCards />} />
              <Route path="/User/Create" element={<UserCreate />} />
              <Route path="/User/Edit" element={<UserEdit />} />
              <Route path="/User/Account" element={<UserAccount />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/details" element={<BlogDetails />} />
              <Route path="/blog/create" element={<BlogCreate />} />
              <Route path="/blog/edit/:id" element={<BlogEdit />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;