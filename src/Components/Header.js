import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Header = () => {
    return (
        <AppBar position="static" color='' style={{borderRadius:'15px'}}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Minimal
                </Typography>
                <Button color="inherit">Login</Button>
                <Button color="inherit">Signup</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
