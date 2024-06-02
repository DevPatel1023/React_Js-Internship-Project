import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


const MainContent = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Welcome to My Website
            </Typography>
            <Typography variant="body1">
                This is the main content area.
            </Typography>
        </Container>
    );
};

export default MainContent;
