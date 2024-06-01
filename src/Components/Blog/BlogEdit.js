import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';

const BlogEdit = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    // Fetch blog details using the id and populate the fields
    // For demonstration, using static values
    const blog = { id, title: `Blog Post ${id}`, content: 'This is the blog content' };
    setTitle(blog.title);
    setContent(blog.content);
  }, [id]);

  const handleSave = () => {
    // Handle blog edit save logic here
    console.log('Blog edited:', { id, title, content });
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Edit Blog
      </Typography>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        fullWidth
        multiline
        rows={4}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </Box>
  );
};

export default BlogEdit;
