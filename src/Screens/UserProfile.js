import React,{ useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, CardActionArea } from '@mui/material';
import Paper from '@mui/material/Paper';
import Avatar1 from '../Images/avatars/avatar_1.jpg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Videocam from '@mui/icons-material/Videocam';
import {
  TextField,
  Grid,
  Button
} from '@mui/material';
import styled from '@mui/material/styles/styled';

const Item = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const style2 = {
  '.nav-link-container': {
    'display': 'ruby',
    'paddingLeft': '15px',
    'lineHeight': '1.57143',
    'fontSize': '0.875rem',
    'fontFamily': '"Public Sans", sans-serif',
    'fontWeight': '400'
  },
  '.create-title-txt': {
    'marginBottom': '5px'
  },
  '.navigation-links': {
    'textDecoration': 'none',
    'color': 'rgb(33, 43, 54)',
  },
  '.navigation-links:hover': {
    'textDecoration': 'underline 0.5px',
  },
  '.current-location': {
    'color': 'rgb(99, 115, 129)',
  }
}

function UserProfile() {
  const avatarImage = Avatar1;
  const [postText, setPostText] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [commentText, setCommentText] = useState('');

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleCommentSubmit = () => {
    // Handle comment submission logic here
    console.log('Comment submitted:', commentText);
  };

  const handleChange = (event) => {
    setPostText(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Post submitted:', postText);
  };
  const handleImageVideoUpload = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*, video/*';
    fileInput.multiple = true;
    fileInput.onchange = (event) => {
      setSelectedFile(event.target.files);
    };
    fileInput.click();
  };

  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5, borderRadius: '10px' }}>
        <Typography variant="h4" gutterBottom>Profile</Typography>
        <div className='nav-link-container' style={style2['.nav-link-container']} >
          <span className='current-location' style={style2['.current-location']} >
            <a className='navigation-links' style={{ ...style2['.navigation-links'], marginRight: '3px' }} href="#">Dashboard</a>
            <ul type='.' style={{ display: 'inline', margin: '0 3px' }}><li></li></ul>
            <a className='navigation-links' style={{ ...style2['.navigation-links'], marginRight: '3px' }} href="">User</a>
            <ul type='.' style={{ display: 'inline', margin: '0 3px' }}><li></li></ul>
            <span style={{ marginLeft: '10px' }}>Jaydon Frankie</span>
          </span>
        </div>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5, borderRadius: '10px', width: '100%' }}>
          <Paper elevation={3} sx={{ height: { xs: '40%', md: '500' }, width: { xs: '100%', md: '90%' }, maxWidth: '1500px' }}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://api-prod-minimal-v510.vercel.app/assets/images/cover/cover_4.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <div class="MuiAvatar-root MuiAvatar-circular css-btmpc1" display="inline-block">
                    <Avatar sx={{ width: 80, height: 85 }} alt="Remy Sharp" src={avatarImage} />
                    <Typography gutterBottom variant="h5" component="div">
                      Jaydon Frankie
                    </Typography>
                    <Typography variant="body2" color="text.secondary">Data analyst</Typography>
                  </div>

                </CardContent>
              </CardActionArea>
            </Card>
          </Paper>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5, borderRadius: '10px' }}>
        <Paper elevation={3} sx={{ width: 'fit-content', p: 2 }}>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={6}>
            <Item>
              <Typography variant="h5" component="div">
                1,947
              </Typography>
              <Typography variant="body2">
                Follower
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Typography variant="h5" component="div">
                9,124
              </Typography>
              <Typography variant="body2">
                Following
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
        </Paper>
      </Box>
      <Box sx={{ p: 2 }}>
        <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
          About
        </Typography>
        <Typography variant="body1">
          Tart I love sugar plum I love oat cake. Sweet roll caramels I love jujubes. Topping cake wafer..
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
          <LocationOnIcon sx={{ mr: 1 }} />
          <Typography variant="body1">Live at Andorra</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <MailOutlineIcon sx={{ mr: 1 }} />
          <Typography variant="body1">
            <Link href="mailto:ashlynn_ohara62@gmail.com">ashlynn_ohara62@gmail.com</Link>
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <WorkIcon sx={{ mr: 1 }} />
          <Typography variant="body1">Data Analyst at Gleichner, Mueller and Tromp</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <SchoolIcon sx={{ mr: 1 }} />
          <Typography variant="body1">
            Studied at <Link href="https://www.nikolaus-leuschke.de/">Nikolaus - Leuschke</Link>
          </Typography>
        </Box>
        </Paper>
      </Box>

      <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h6">Social</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Link href="https://www.facebook.com/caitlyn.kerluke" underline="hover">
          <IconButton>
            <FacebookIcon />
          </IconButton>
          https://www.facebook.com/caitlyn.kerluke
        </Link>
        <Link href="https://www.instagram.com/caitlyn.kerluke" underline="hover">
          <IconButton>
            <InstagramIcon />
          </IconButton>
          https://www.instagram.com/caitlyn.kerluke
        </Link>
        <Link href="https://www.linkedin.com/in/caitlyn.kerluke" underline="hover">
          <IconButton>
            <LinkedInIcon />
          </IconButton>
          https://www.linkedin.com/in/caitlyn.kerluke
        </Link>
        <Link href="https://www.twitter.com/caitlyn.kerluke" underline="hover">
          <IconButton>
            <TwitterIcon />
          </IconButton>
          https://www.twitter.com/caitlyn.kerluke
        </Link>
      </Box>
    </Paper>
    <Paper elevation={3} sx={{ padding: 2, mt: 2 }}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          multiline
          rows={4}
          placeholder="Share what you are thinking here..."
          value={postText}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button
          fullWidth
          variant="contained"
          startIcon={<PhotoCamera />}
          onClick={handleImageVideoUpload}
          sx={{
            bgcolor: '#4CAF50',
            color: 'white',
          }}
        >
          Image/Video
        </Button>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button
          fullWidth
          variant="contained"
          startIcon={<Videocam />}
          sx={{
            bgcolor: '#F44336',
            color: 'white',
          }}
        >
          Streaming
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Post
        </Button>
      </Grid>
    </Grid>
    </Paper>

    <Paper elevation={3} sx={{ padding: 2, mt: 2 }}>
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Avatar src={avatarImage} />
      </Grid>
      <Grid item xs={10}>
        <Typography variant="h6">Jaydon Frankie</Typography>
        <Typography variant="subtitle2">06 Jun 2024</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          multiline
          rows={4}
          value={commentText}
          onChange={handleCommentChange}
          placeholder="Write a Tweet..."
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleCommentSubmit}>
          Post
        </Button>
      </Grid>
    </Grid>
    </Paper>
    </div>
  )
}

export default UserProfile;
