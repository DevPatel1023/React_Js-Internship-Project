import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Header = () => {
    return (
        <AppBar
            position="static"
            color=''
            sx={{
                borderRadius: '15px',
                display: 'flex',
                maxWidth: '81%',  // Adjust the max width to your preference
                margin: '20px 20px 20px auto',  // Align to the right
                padding: '0 20px'  // Optional: Adjust padding as needed
            }}
        >
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Minimal
                </Typography>
                <Button color="inherit" href='/login'>Login</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
