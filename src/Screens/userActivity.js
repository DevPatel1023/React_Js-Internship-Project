import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

const ActivityFeed = () => {
  const activities = [
    { id: 1, action: 'Liked a post', time: '2 hours ago' },
    { id: 2, action: 'Commented on a post', time: '5 hours ago' },
    { id: 3, action: 'Followed a new user', time: '1 day ago' },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Recent Activity
      </Typography>
      <List>
        {activities.map((activity) => (
          <ListItem key={activity.id} sx={{ mb: 2 }}>
            <ListItemText primary={activity.action} secondary={activity.time} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ActivityFeed;
