import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  IconButton,
  Tooltip,
  Container,
  Paper,
  OutlinedInput,
} from '@mui/material';
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignRight,
  FormatAlignJustify,
  Link,
  Image,
  AttachFile,
  Undo,
  Redo,
} from '@mui/icons-material';

const CreateNewPost = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [attachedFiles, setAttachedFiles] = useState([]);
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleContentChange = (event) => {
    setUndoStack([...undoStack, content]);
    setRedoStack([]);
    setContent(event.target.value);
  };

  const handleCoverImageChange = (event) => {
    setCoverImage(event.target.files[0]);
  };



  const handleBoldClick = () => {
    let textarea = document.getElementById('content-textarea').style.fontWeight = 'bold'; 
    setContent(textarea);
  };

  const handleItalicClick = () => {
    let textarea = document.getElementById('content-textarea').style.fontStyle = 'italic' ; 
    setContent(textarea);
  };

  const handleUnderlineClick = () => {
    let textarea = document.getElementById('content-textarea').style.textDecoration = 'underline'; 
    setContent(textarea);
  };

  const handleAlignLeftClick = () => {
    setUndoStack([...undoStack, content]);
    setContent(content + '\nleft aligned\n');
  };

  const handleAlignCenterClick = () => {
    setUndoStack([...undoStack, content]);
    setContent(content + '\n  center aligned\n');
  };

  const handleAlignRightClick = () => {
    setUndoStack([...undoStack, content]);
    setContent(content + '\nright aligned\n');
  };

  const handleAlignJustifyClick = () => {
    setUndoStack([...undoStack, content]);
    setContent(content + '\njustified text\n');
  };

  const handleLinkClick = () => {
    const link = prompt('Enter link URL:');
    if (link) {
      setUndoStack([...undoStack, content]);
      setContent(content + `[link](${link})`);
    }
  };

  const handleImageClick = () => {
    const imageUrl = prompt('Enter image URL:');
    if (imageUrl) {
      setUndoStack([...undoStack, content]);
      setContent(content + `![Image](${imageUrl})`);
    }
  };

  const handleAttachFileClick = (event) => {
    const files = Array.from(event.target.files);
    setAttachedFiles([...attachedFiles, ...files]);
  };

  const handleUndoClick = () => {
    if (undoStack.length > 0) {
      const lastContent = undoStack.pop();
      setRedoStack([...redoStack, content]);
      setContent(lastContent);
      setUndoStack([...undoStack]);
    }
  };

  const handleRedoClick = () => {
    if (redoStack.length > 0) {
      const lastContent = redoStack.pop();
      setUndoStack([...undoStack, content]);
      setContent(lastContent);
      setRedoStack([...redoStack]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle post submission logic here
  };

  return (
    <div className='blogcreate'>
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5 }}>
      <Typography variant="h5" gutterBottom fontWeight={'bolder'}>
        Create New Post
      </Typography>
      <Typography variant="body1" gutterBottom>
        Fill in the details below to create a new post...
      </Typography>
      <Container maxWidth="md" sx={{ mt: 4 }} borderRadius={'25px'}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Details
          </Typography>
          <TextField
            label="Title"
            value={title}
            onChange={handleTitleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Short description"
            value={description}
            onChange={handleDescriptionChange}
            fullWidth
            margin="normal"
            multiline
            rows={2}
          />
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            Content
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex',flexWrap: 'wrap', alignItems: 'center' }}>
              <Tooltip title="Bold">
                <IconButton onClick={handleBoldClick}>
                  <FormatBold />
                </IconButton>
              </Tooltip>
              <Tooltip title="Italic">
                <IconButton onClick={handleItalicClick}>
                  <FormatItalic />
                </IconButton>
              </Tooltip>
              <Tooltip title="Underline">
                <IconButton onClick={handleUnderlineClick}>
                  <FormatUnderlined />
                </IconButton>
              </Tooltip>
              <Tooltip title="Align Left">
                <IconButton onClick={handleAlignLeftClick}>
                  <FormatAlignLeft />
                </IconButton>
              </Tooltip>
              <Tooltip title="Align Center">
                <IconButton onClick={handleAlignCenterClick}>
                  <FormatAlignCenter />
                </IconButton>
              </Tooltip>
              <Tooltip title="Align Right">
                <IconButton onClick={handleAlignRightClick}>
                  <FormatAlignRight />
                </IconButton>
              </Tooltip>
              <Tooltip title="Justify">
                <IconButton onClick={handleAlignJustifyClick}>
                  <FormatAlignJustify />
                </IconButton>
              </Tooltip>
              <Tooltip title="Link">
                <IconButton onClick={handleLinkClick}>
                  <Link />
                </IconButton>
              </Tooltip>
              <Tooltip title="Image">
                <IconButton onClick={handleImageClick}>
                  <Image />
                </IconButton>
              </Tooltip>
              <Tooltip title="Attach File">
                <label htmlFor="file-upload">
                  <input
                    id="file-upload"
                    type="file"
                    multiple
                    onChange={handleAttachFileClick}
                    style={{ display: 'none' }}
                  />
                  <IconButton component="span">
                    <AttachFile />
                  </IconButton>
                </label>
              </Tooltip>
              <Tooltip title="Undo">
                <IconButton onClick={handleUndoClick}>
                  <Undo />
                </IconButton>
              </Tooltip>
              <Tooltip title="Redo">
                <IconButton onClick={handleRedoClick}>
                  <Redo />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          <OutlinedInput
            id="content-textarea"
            multiline
            rows={8}
            fullWidth
            value={content}
            onChange={handleContentChange}
            placeholder="Write something about blog..."
            sx={{ mt: 2 }}
          />
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            Cover Image
          </Typography>
          <Grid container justifyContent="center" alignItems="center" sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <input
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                  onChange={handleCoverImageChange}
                  hidden
                />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" component="span" sx={{ mb: 2 }}>
                    Drop or Select file
                  </Button>
                </label>
                {coverImage && (
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={URL.createObjectURL(coverImage)} alt="Cover" width="200" height="150" />
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
          <Box>
            {attachedFiles.map((file, index) => (
              <Typography key={index}>{file.name}</Typography>
            ))}
          </Box>
          <Button variant="contained" color="primary" type="submit" sx={{ mt: 3 }} onClick={handleSubmit}>
            Create Post
          </Button>
        </Paper>
      </Container>
    </Box>
    </div>
  );
};

export default CreateNewPost;
