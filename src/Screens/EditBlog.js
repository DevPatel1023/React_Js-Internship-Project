import React, { useState } from 'react';
import cover_img from '../Images/icons/cover_icon.svg';
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Container,
  Paper,
  Switch,
} from '@mui/material';
import { styled } from '@mui/system';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import {
  FormGroup,
  FormControlLabel,
  Chip,
} from '@mui/material';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const StyledReactQuillContainer = styled('div')({
  '.ql-container': {
    borderRadius: '10px',
    height: '200px',
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '0px',
  },
  '.ql-toolbar.ql-snow': {
    borderRadius: '10px',
    borderBottomLeftRadius: '0px',
    borderBottomRightRadius: '0px',
  },
  '.ql-toolbar button:hover': {
    color: 'rgb(0, 167, 111)',
  },
});
const style2 = {
  '.nav-link-container': {
    'display': 'ruby',
    'paddingLeft': '15px',
    'lineHeight': '1.57143',
    'fontSize': '0.875rem',
    'font-family': '"Public Sans", sans - serif',
    'font-weight': '400'
  },

  '.create-title-txt': {
    'margin-bottom': '5px'
  },

  '.navigation-links': {
    'text-decoration': 'none',
    'color': 'rgb(33, 43, 54)',
  },

  '.navigation-links:hover': {
    'text-decoration': 'underline 0.5px',
  },

  '.current-location': {
    'color': 'rgb(99, 115, 129)',
  }
}
const CreateNewPost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [attachedFiles, setAttachedFiles] = useState([]);

  const [metaKeywords, setMetaKeywords] = useState('');


  const handleTagsChange = (event) => {
    setTags(event.target.value);
  };

  const handleMetaKeywordsChange = (event) => {
    setMetaKeywords(event.target.value);
  };



  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCoverImageChange = (event) => {
    setCoverImage(event.target.files[0]);
  };

  const clickopenimglocal = () => {
    document.getElementById('contained-button-file').click();
  };

  const handleAttachFileClick = (event) => {
    const files = Array.from(event.target.files);
    setAttachedFiles([...attachedFiles, ...files]);
  };
  //ssss
  const [tags, setTags] = useState([
    'Technology',
    'Marketing',
    'Design',
    'Photography',
    'Art',
  ]);
  const [keywords, setKeywords] = useState([
    'Fitness',
    'Nature',
    'Business',
  ]);

  const [metaTitle, setMetaTitle] = useState('Minimal UI Kit');
  const [metaDescription, setMetaDescription] = useState(
    'The starting point for your next project with Minimal UI Kit'
  );
  const [enableComments, setEnableComments] = useState(false);
  const [publish, setPublish] = useState(false);

  const handleAddTag = (tag) => {
    setTags([...tags, tag]);
  };

  const handleRemoveTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleAddKeyword = (keyword) => {
    setKeywords([...keywords, keyword]);
  };

  const handleRemoveKeyword = (keyword) => {
    setKeywords(keywords.filter((k) => k !== keyword));
  };

  const handleMetaTitleChange = (event) => {
    setMetaTitle(event.target.value);
  };

  const handleMetaDescriptionChange = (event) => {
    setMetaDescription(event.target.value);
  };

  const handleEnableCommentsChange = (event) => {
    setEnableComments(event.target.checked);
  };

  const handlePublishChange = (event) => {
    setPublish(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      title,
      description,
      content,
      coverImage,
      attachedFiles,
      tags,
      metaTitle,
      metaDescription,
      metaKeywords,
      enableComments,
    });
  };

  return (
    <div className="blogcreate">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5, borderRadius: '10px' }}>
        <Typography variant="h5" gutterBottom fontWeight="bolder" style={{ display: 'flex', flexDirection: 'column', width: "100%" }}>
          Edit Post

          <div className='nav-link-container' style={style2['.nav-link-container']}>
            <span className='current-location' style={style2['.current-location']}>
              <a className='navigation-links' style={{ ...style2['.navigation-links'], marginRight: '3px' }} href="#">Dashboard</a>
              <ul type='.' style={{ display: 'inline', margin: '0 3px' }}><li></li></ul>
              <a className='navigation-links' style={{ ...style2['.navigation-links'], marginRight: '3px' }} href="">Blog</a>
              <ul type='.' style={{ display: 'inline', margin: '0 3px' }}><li></li></ul>
              Edit Blog
            </span>
          </div>
        </Typography>
        <Container sx={{ width: '900px', mt: 4, borderRadius: '10px' }}>
          <Typography variant="h5" gutterBottom fontWeight="bolder" style={{ display: 'flex', flexDirection: 'column', width: "100%" }}>
            Details</Typography>
          <Typography gutterBottom style={{ display: 'flex', flexDirection: 'column', width: "100%" }}>
            Title, short description, image...</Typography>
          <br />
          <Paper elevation={3} sx={{ p: 5, borderRadius: '10px', }}>
            <TextField
              label="Post Title"
              value={title}
              onChange={handleTitleChange}
              fullWidth
              margin="normal"
              sx={{
                mb: 2,
                borderRadius: '10px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '10px',
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black',
                  },
                },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: 'black',
                },
              }}
            />
            <TextField
              label="Discription"
              value={description}
              onChange={handleDescriptionChange}
              fullWidth
              margin="normal"
              multiline
              rows={2}
              sx={{
                mb: 2,
                borderRadius: '10px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '10px',
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black',
                  },
                },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: 'black',
                },
              }}
            />
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              <strong>Content</strong>
            </Typography>
            <StyledReactQuillContainer>
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                modules={{
                  toolbar: [
                    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    ['bold', 'italic', 'underline'],
                    [{ 'align': [] }],
                    ['link', 'image'],
                    ['clean'],
                  ],
                }}
                formats={[
                  'header', 'font',
                  'bold', 'italic', 'underline',
                  'list', 'bullet',
                  'align',
                  'link', 'image',
                ]}
              />
            </StyledReactQuillContainer>
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              <strong>Cover image</strong>
            </Typography>
            <Paper
              elevation={3}
              sx={{ width: '100%', p: 2, mb: 2, borderRadius: '10px', height: '390px' }}
              onClick={clickopenimglocal}
            >
              <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 3 }}>
                    <input
                      accept="image/*"
                      id="contained-button-file"
                      type="file"
                      onChange={handleCoverImageChange}
                      hidden
                    />
                    <label htmlFor="contained-button-file">
                      <img src={cover_img} alt="cover" width={'200px'} height={'200px'} />
                    </label>
                  </Box>
                </Grid>
              </Grid>
              <Box>
                {attachedFiles.map((file, index) => (
                  <Typography key={index}>{file.name}</Typography>
                ))}
              </Box>
              <Typography variant="body1" gutterBottom sx={{ mt: 2 }} textAlign="center">
                <h3 style={{ margin: '5px' }}>Drop or Select file</h3>
              </Typography>
              <Typography variant="body1" gutterBottom textAlign="center">
                Drop files here or click browse through your machine
              </Typography>
            </Paper>
          </Paper>
        </Container>
        <Container maxWidth="md" sx={{ mt: 4, borderRadius: '10px' }}>
          <Paper elevation={3} sx={{ p: 5, borderRadius: '10px' }}>
        <Box sx={{ padding: 4 }}>
      <Typography variant="h5" gutterBottom>
        Metadata
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" gutterBottom>
            Tags
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                onDelete={() => handleRemoveTag(tag)}
                variant="outlined"
              />
            ))}
            <TextField
              label="Add Tag"
              size="small"
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  handleAddTag(event.target.value);
                  event.target.value = '';
                }
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Meta Title"
            value={metaTitle}
            onChange={handleMetaTitleChange}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Meta Description"
            value={metaDescription}
            onChange={handleMetaDescriptionChange}
            fullWidth
            multiline
            rows={3}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle1" gutterBottom>
            Keywords
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {keywords.map((keyword) => (
              <Chip
                key={keyword}
                label={keyword}
                onDelete={() => handleRemoveKeyword(keyword)}
                variant="outlined"
              />
            ))}
            <TextField
              label="Add Keyword"
              size="small"
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  handleAddKeyword(event.target.value);
                  event.target.value = '';
                }
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={enableComments}
                  onChange={handleEnableCommentsChange}
                />
              }
              label="Enable comments"
            />
          </FormGroup>
        </Grid>

        <Grid item xs={12}>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={publish}
                  onChange={handlePublishChange}
                />
              }
              label="Publish"
            />
          </FormGroup>
        </Grid>

       
      </Grid>
    </Box>
  </Paper>
        </Container>
        <Box sx={{ mt: 3 }}>
          <Button variant="outlined" type="button" sx={{ mx: 2 }} onClick={handleSubmit} style={{ color: 'grey', padding:'10px',borderRadius:'10px'}}>
            Preview
          </Button>
          <Button
            variant="contained"
            style={{ color: 'white', backgroundColor: 'black' ,padding:'10px',borderRadius:'10px'}}
            type="submit"
            onClick={handleSubmit}
          >
            Save Changes
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default CreateNewPost;