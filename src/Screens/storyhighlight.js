import React from 'react';
import { Box, Avatar, Typography, Grid } from '@mui/material';

const StoryHighlights = () => {
  const highlights = [
    { id: 1, user: 'Jane Doe', image: 'https://i.pravatar.cc/300?img=11' },
    { id: 2, user: 'John Smith', image: 'https://i.pravatar.cc/300?img=13' },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Story Highlights
      </Typography>
      <Grid container spacing={3}>
        {highlights.map((highlight) => (
          <Grid item key={highlight.id}>
            <Box sx={{ textAlign: 'center' }}>
              <Avatar
                src={highlight.image}
                alt={highlight.user}
                sx={{ width: 70, height: 70, mb: 1 }}
              />
              <Typography variant="body2">{highlight.user}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StoryHighlights;
