import React from 'react';
import { Grid } from '@mui/material';
import SocialCard from './SocialCard';
import p1 from '../Images/CardImages/p1.png';
import p2 from '../Images/CardImages/p2.png';
import p3 from '../Images/CardImages/p3.png';
import p4 from '../Images/CardImages/p4.png';
import p5 from '../Images/CardImages/p5.png';
import p6 from '../Images/CardImages/p6.png';
import p7 from '../Images/CardImages/p7.png';
import p8 from '../Images/CardImages/p8.png';
import p9 from '../Images/CardImages/p9.png';

const socialData = [
  {
    image: p1,
    name: 'Jayvion Simon',
    title: 'HR Manager',
    follower: '9.91k',
    following: '1.95k',
    totalPost: '9.12k',
    socialLinks: ['facebook', 'instagram', 'linkedin', 'twitter'],
  },
  {
    image: p2,
    name: 'Emily Chen',
    title: 'Marketing Manager',
    follower: '8.12k',
    following: '2.45k',
    totalPost: '7.89k',
    socialLinks: ['facebook', 'instagram', 'linkedin'],
  },
  {
    image: p3,
    name: 'Mason Lee',
    title: 'Software Engineer',
    follower: '7.23k',
    following: '3.12k',
    totalPost: '6.45k',
    socialLinks: ['facebook', 'instagram', 'linkedin', 'twitter'],
  },
  {
    image: p4,
    name: 'Aria Smith',
    title: 'Product Manager',
    follower: '6.45k',
    following: '4.23k',
    totalPost: '5.67k',
    socialLinks: ['facebook', 'instagram', 'linkedin'],
  },
  {
    image: p5,
    name: 'Ella Davis',
    title: 'UI/UX Designer',
    follower: '5.67k',
    following: '5.34k',
    totalPost: '4.56k',
    socialLinks: ['facebook', 'instagram', 'linkedin', 'twitter'],
  },
  {
    image: p6,
    name: 'Olivia Taylor',
    title: 'Frontend Developer',
    follower: '4.56k',
    following: '6.78k',
    totalPost: '3.45k',
    socialLinks: ['facebook', 'instagram', 'linkedin', 'twitter'],
  },
  {
    image: p7,
    name: 'Ethan Brown',
    title: 'Backend Developer',
    follower: '3.45k',
    following: '7.89k',
    totalPost: '2.34k',
    socialLinks: ['facebook', 'instagram', 'linkedin'],
  },
  {
    image: p8,
    name: 'Mia Wilson',
    title: 'Full Stack Developer',
    follower: '2.34k',
    following: '8.12k',
    totalPost: '1.23k',
    socialLinks: ['facebook', 'instagram', 'linkedin', 'twitter'],
  },
  {
    image: p9,
    name: 'William Moore',
    title: 'DevOps Engineer',
    follower: '1.23k',
    following: '9.91k',
    totalPost: '0.12k',
    socialLinks: ['facebook', 'instagram', 'linkedin', 'twitter'],
  }
];

const App = () => {
  return (
    <Grid container spacing={3} padding={3} >
      {socialData.map((data, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <SocialCard {...data} />
        </Grid>
      ))}
    </Grid>
  );
};

export default App;
