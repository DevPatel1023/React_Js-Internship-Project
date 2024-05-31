import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ArticleIcon from '@mui/icons-material/Article';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import useMediaQuery from '@mui/material/useMediaQuery';
import Logo from '../Images/assests/Logo.svg';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Sidebar = () => {
  const [openUser, setOpenUser] = useState(false);
  const [openBlog, setOpenBlog] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false); 
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen); 
  };

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

  const drawer = (
    <div>
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
                        <FiberManualRecordIcon fontSize='1%' />
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
    </div>
  );

  return (
    <>
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle} 
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            width: 240,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
          }}
        >
          {drawer}
        </Drawer>
      )}
      {isMobile && ( 
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle} 
          edge="start"
          sx={{ display: { sm: 'inline-block', md: 'none' } ,top: '0', left: '0'}}
        >
          <MenuIcon />
        </IconButton>
      )}
    </>
  );
};

export default Sidebar;
