import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';


        const Header = () => {
            return (
                <AppBar position="static" sx={{ bgcolor: '#ffffff', color: '#000000' }}>
                    <Toolbar>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            Minimals
                        </Typography>
                        <IconButton color="inherit">
                            <NotificationsIcon />
                        </IconButton>
                        <Stack direction="row" spacing={1}>
                            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                        </Stack>
                    </Toolbar>
                </AppBar>
            );
        };
        
  

export default Header;
