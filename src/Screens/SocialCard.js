import React from 'react';
import { Card, CardContent, CardHeader, Typography, Avatar, Box, Grid, Divider } from '@mui/material';
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

const SocialCard = ({ image, name, title, follower, following, totalPost, socialLinks }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: '10px auto' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ width: 80, height: 80, bgcolor: '#ffe0b2' }} aria-label="profile">
            <img src={image} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Avatar>
        }
        title={<Typography variant="h6">{name}</Typography>}
        subheader={<Typography variant="body2">{title}</Typography>}
      />
      <CardContent sx={{ padding: '0px' }}>
        <Grid container alignItems="center" justifyContent="space-around" mt={1} mb={1}>
          {socialLinks.map((link, index) => (
            <Grid item key={index}>
              <Box display="flex" alignItems="center">
                {link === 'facebook' && <Facebook fontSize="large" />}
                {link === 'instagram' && <Instagram fontSize="large" />}
                {link === 'linkedin' && <LinkedIn fontSize="large" />}
                {link === 'twitter' && <Twitter fontSize="large" />}
              </Box>
            </Grid>
          ))}
        </Grid>
        <Divider variant="middle" />
        <Grid container alignItems="center" justifyContent="space-around" mt={1} mb={1}>
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              Follower
            </Typography>
            <Typography variant="h6">{follower}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              Following
            </Typography>
            <Typography variant="h6">{following}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              Total Post
            </Typography>
            <Typography variant="h6">{totalPost}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SocialCard;
