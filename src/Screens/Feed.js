import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  IconButton,
  Button,
  Divider,
} from '@mui/material';
import { Favorite, Share, Comment } from '@mui/icons-material';

const Feed = () => {
  return (
    <Box sx={{ flexGrow: 1, ml: 2 }}>
      {/* Sample Post 1: Text Post */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ mr: 2 }} src="https://i.pravatar.cc/300" alt="User 1" />
            <Typography variant="h6">John Doe</Typography>
          </Box>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Just had an amazing day at the beach! The weather was perfect and the sunset was breathtaking.
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
          <IconButton aria-label="like">
            <Favorite />
          </IconButton>
          <IconButton aria-label="comment">
            <Comment />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </Box>
      </Card>

      {/* Sample Post 2: Image Post */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ mr: 2 }} src="https://i.pravatar.cc/300?img=5" alt="User 2" />
            <Typography variant="h6">Jane Smith</Typography>
          </Box>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Check out this beautiful mountain view!
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="300"
          image="https://source.unsplash.com/random/?mountain"
          alt="Mountain view"
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
          <IconButton aria-label="like">
            <Favorite />
          </IconButton>
          <IconButton aria-label="comment">
            <Comment />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </Box>
      </Card>

      {/* Sample Post 3: Video Post */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ mr: 2 }} src="https://i.pravatar.cc/300?img=10" alt="User 3" />
            <Typography variant="h6">Michael Johnson</Typography>
          </Box>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Watch this amazing nature documentary!
          </Typography>
        </CardContent>
        <CardMedia component="iframe" height="300" src="https://www.youtube.com/embed/dQw4w9WgXcQ" />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
          <IconButton aria-label="like">
            <Favorite />
          </IconButton>
          <IconButton aria-label="comment">
            <Comment />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </Box>
      </Card>

      {/* Sample Post 4: Link Post */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ mr: 2 }} src="https://i.pravatar.cc/300?img=15" alt="User 4" />
            <Typography variant="h6">Emily Davis</Typography>
          </Box>
          <Typography variant="body1" sx={{ mt: 2 }}>
            I found this interesting article on web development. Check it out!
          </Typography>
          <Button
            href="https://www.freecodecamp.org/news/"
            target="_blank"
            sx={{ mt: 2 }}
            variant="contained"
            color="primary"
          >
            Read Article
          </Button>
        </CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
          <IconButton aria-label="like">
            <Favorite />
          </IconButton>
          <IconButton aria-label="comment">
            <Comment />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </Box>
      </Card>

      <Divider sx={{ my: 3 }} />

      {/* Sample Post 5: Mixed Content */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ mr: 2 }} src="https://i.pravatar.cc/300?img=20" alt="User 5" />
            <Typography variant="h6">David Clark</Typography>
          </Box>
          <Typography variant="body1" sx={{ mt: 2 }}>
            A day in the life of a software developer. Here's a sneak peek into my workspace.
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="300"
          image="https://source.unsplash.com/random/?workspace,office"
          alt="Workspace"
        />
        <CardContent>
          <Typography variant="body1">
            I love how organized and efficient my workspace is. It really helps me focus on coding and
            get my projects done!
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
          <IconButton aria-label="like">
            <Favorite />
          </IconButton>
          <IconButton aria-label="comment">
            <Comment />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </Box>
      </Card>
      {/* Funny Meme Post */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ mr: 2 }} src="https://i.pravatar.cc/300?img=11" alt="User 6" />
            <Typography variant="h6">Funny Memes</Typography>
          </Box>
          <Typography variant="body1" sx={{ mt: 2 }}>
            When you find out your code works on the first try...
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="300"
          image="https://source.unsplash.com/600x300/?funny,meme"
          alt="Funny meme"
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
          <IconButton aria-label="like">
            <Favorite />
          </IconButton>
          <IconButton aria-label="comment">
            <Comment />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </Box>
      </Card>

      {/* Funny Quote Post */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ mr: 2 }} src="https://i.pravatar.cc/300?img=21" alt="User 7" />
            <Typography variant="h6">Daily Humor</Typography>
          </Box>
          <Typography variant="body1" sx={{ mt: 2, fontStyle: 'italic' }}>
            "I have a lot of growing up to do. I realized that the other day inside my fort." — Zach Galifianakis
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
          <IconButton aria-label="like">
            <Favorite />
          </IconButton>
          <IconButton aria-label="comment">
            <Comment />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </Box>
      </Card>

      {/* GIF Post */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ mr: 2 }} src="https://i.pravatar.cc/300?img=13" alt="User 8" />
            <Typography variant="h6">Gif Master</Typography>
          </Box>
          <Typography variant="body1" sx={{ mt: 2 }}>
            When you finally fix a bug after hours of searching...
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="300"
          image="https://media.giphy.com/media/26tOZ42Mg6pbTUPHW/giphy.gif"
          alt="Funny GIF"
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
          <IconButton aria-label="like">
            <Favorite />
          </IconButton>
          <IconButton aria-label="comment">
            <Comment />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </Box>
      </Card>

      {/* Joke Post */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ mr: 2 }} src="https://i.pravatar.cc/300?img=17" alt="User 9" />
            <Typography variant="h6">Joker Joe</Typography>
          </Box>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Why don't programmers like nature? It has too many bugs.
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
          <IconButton aria-label="like">
            <Favorite />
          </IconButton>
          <IconButton aria-label="comment">
            <Comment />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </Box>
      </Card>

      {/* Reaction Post */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ mr: 2 }} src="https://i.pravatar.cc/300?img=19" alt="User 10" />
            <Typography variant="h6">Reaction Central</Typography>
          </Box>
          <Typography variant="body1" sx={{ mt: 2 }}>
            My face when someone says "It worked on my machine."
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="300"
          image="https://source.unsplash.com/600x300/?reaction,funny"
          alt="Funny reaction"
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
          <IconButton aria-label="like">
            <Favorite />
          </IconButton>
          <IconButton aria-label="comment">
            <Comment />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </Box>
      </Card>

      {/* Lighthearted Video Post */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ mr: 2 }} src="https://i.pravatar.cc/300?img=22" alt="User 11" />
            <Typography variant="h6">Fun Videos</Typography>
          </Box>
          <Typography variant="body1" sx={{ mt: 2 }}>
            This is the funniest video I've seen all week!
          </Typography>
        </CardContent>
        <CardMedia component="iframe" height="300" src="https://www.youtube.com/embed/tgbNymZ7vqY" />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
          <IconButton aria-label="like">
            <Favorite />
          </IconButton>
          <IconButton aria-label="comment">
            <Comment />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </Box>
      </Card>
    </Box>
    
  );
};

export default Feed;
