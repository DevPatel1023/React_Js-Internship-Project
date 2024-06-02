import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ArticleIcon from '@mui/icons-material/Article';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Logo from '../Images/assests/Logo.svg';

const Sidebar = () => {
  const [openUser, setOpenUser] = useState(false);
  const [openBlog, setOpenBlog] = useState(false);

  const handleUserClick = () => {
    setOpenUser(!openUser);
  };

  const handleBlogClick = () => {
    setOpenBlog(!openBlog);
  };

  const menuItems = [
    {
      text: 'User',
      icon: <AccountBoxIcon />,
      handleClick: handleUserClick,
      open: openUser,
      items: [
        { text: 'Profile', path: '/profile' },
        { text: 'Cards', path: '/cards' },
        { text: 'List', path: '/list' },
        { text: 'Create', path: '/create' },
        { text: 'Edit', path: '/edit' },
        { text: 'Account', path: '/account' },
      ],
    },
    {
      text: 'Blog',
      icon: <ArticleIcon />,
      handleClick: handleBlogClick,
      open: openBlog,
      items: [
        { text: 'List', path: '/blog/list' },
        { text: 'Detail', path: '/blog/detail' },
        { text: 'Create', path: '/blog/create' },
        { text: 'Edit', path: '/blog/edit' },
      ],
    },
    { text: 'Login', icon: <LoginIcon />, path: '/login' },
    { text: 'Signup', icon: <PersonAddIcon />, path: '/signup' },
  ];

  return (
    // Change made: Parent container with relative positioning
    <div style={{ display: 'flex', position: 'relative', height: '100vh' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          // change made: Absolute positioning for the Drawer
          position: 'absolute',
          height: '100%',
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box', position: 'relative' },
        }}
      >
         <img src={Logo} alt="Logo" style={{ width: '20%', margin: '20px' }} />
        <List>
          {menuItems.map((item, index) => (
            <div key={index}>
              <ListItem
                button
                onClick={item.handleClick}
                component={item.path ? 'a' : 'div'}
                href={item.path ? item.path : undefined}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
                {item.items ? (item.open ? <ExpandLess /> : <ExpandMore />) : null}
              </ListItem>
              {item.items && (
                <Collapse in={item.open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.items.map((subItem, subIndex) => (
                      <ListItem button key={subIndex} component='a' href={subItem.path} sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <KeyboardArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary={subItem.text} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </div>
          ))}
        </List>
      </Drawer>
      {/* change made: Main content area with left margin and horizontal scroll */}
      <main style={{ flexGrow: 1, padding: '16px', marginLeft: '240px', overflowX: 'auto' }}>
      </main>
    </div>
  );
};

export default Sidebar;
