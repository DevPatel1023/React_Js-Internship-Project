import React, { useState, useEffect } from 'react';
import '../CSS/create.css';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import UploadPhoto from '../Images/icons/uploadPhoto_icon.svg';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import axios from 'axios';

const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 400,
    height: 500,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    borderRadius: 25,
    [theme.breakpoints.down('md')]: {
        width: 750,
    },
}));

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
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
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

const DemoPapers = styled(Paper)(({ theme }) => ({
    width: 'fit-content',
    height: 'fit-content',
    maxWidth: '100%',
    maxHeight: '100%',
    padding: theme.spacing(2),
    ...theme.typography.body2,
    borderRadius: 25,
    boxSizing: 'border-box',
    overflow: 'visible',
    '& .MuiFormHelperText-root': {
        whiteSpace: 'nowrap',
    },
}));

function CreateScreen() {
    const [countries, setCountries] = useState([]);
    const [formValues, setFormValues] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        country: '',
        state: '',
        city: '',
        address: '',
        zip: '',
        company: '',
        role: ''
    });
    const [errors, setErrors] = useState({});
    const [isPhotoUploaded, setIsPhotoUploaded] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormValues({ ...formValues, [id]: value });
        if (errors[id]) {
            setErrors({ ...errors, [id]: false });
        }
    };

    const handleCountryChange = (e) => {
        setFormValues({ ...formValues, country: e.target.value });
    };

    const validate = () => {
        const newErrors = {};
        Object.keys(formValues).forEach((key) => {
            if (!formValues[key]) {
                newErrors[key] = true;
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        let hasErrors = false;
        Object.entries(formValues).forEach(([key, value]) => {
            if (!value) {
                setErrors(prevErrors => ({ ...prevErrors, [key]: true }));
                hasErrors = true;
            }
        });

        if (!isPhotoUploaded) {
            setErrors(prevErrors => ({ ...prevErrors, photo: true }));
            hasErrors = true;
        }

        if (hasErrors) {
            const imgbox = document.getElementById('imagebox-borderline');
            const imginner = document.getElementById('imagebox-inner');
            if (imgbox) {
                imgbox.style.border = '2px dotted red';
                imginner.style.backgroundColor = 'rgba(255, 86, 48, 0.08)';
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const imgbox = document.getElementById('imagebox-borderline');
            if (imgbox) {
                imgbox.style.border = 'none';
            }
            // Submit form
            console.log('Form Submitted', formValues);
        }
    };
    const handleUploadPhotoClick = () => {
        document.getElementById('upload-photo-input').click();
    };

    useEffect(() => {
        axios.get('https://restcountries.com/v2/all')
            .then(response => {
                setCountries(response.data);
            })
            .catch(error => {
                console.error('Error fetching countries:', error);
            });
    }, []);

    return (
        <div className='create-container'>
            <h2 className='create-title-txt'>Create a new user</h2>
            <div className='nav-link-container'>
                <span className='current-location'>
                    <a className='navigation-links' href="#">Dashboard</a>
                    <ul type='.'><li></li></ul>
                    <a className='navigation-links' href="">Blog</a>
                    <ul type='.'><li></li></ul>
                    Create
                </span>
            </div>
            <br /><br />
            <div className="innner-container-handeler">
                <div style={{
                    marginLeft: '10px', display: 'flex',
                    gap: '15px'
                }}>
                    <Stack direction="row" spacing={2}>
                        <DemoPaper className='demo-page-container' style={{ height: '450px' }}>
                            <div className='upload-container' id='upload-container' onClick={handleUploadPhotoClick}>
                                <div className="imagebox-borderline" id='imagebox-borderline'>
                                    <div className="imagebox-inner" id='imagebox-inner'>
                                        <img src={UploadPhoto} className='image-upload' alt="img" style={{ width: "35px", height: "35px" }} />
                                        <span className='upload-img-text'>Upload photo</span>
                                    </div>
                                </div>
                                <br />
                                <span className='upload-img-text'>Allowed *.jpeg, *.jpg, *.png, *.gif
                                    <br />max size of 3 Mb</span>
                                {isPhotoUploaded || errors.photo ? <p className="avatar-required-text" style={{ color: 'red' }}>Avatar is required</p> : null }
                                <input type="file" id="upload-photo-input" style={{ display: 'none' }} onChange={() => setIsPhotoUploaded(true)} />
                            </div>
                            <div className="email-verification">
                                <p>Email Verified</p>
                                <div className="verification-msg">
                                    <span className='verification-email-msg'>
                                        Disabling this will automatically send the user a verification email
                                    </span>
                                    <FormControlLabel
                                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                        color='rgb(0, 167, 111)' 
                                    />
                                </div>
                            </div>
                        </DemoPaper>
                    </Stack>
                </div>
                <div className="container-handle-2">
                    <Stack direction="row" spacing={2}>
                        <DemoPapers className="demo-pages-2" square={false}>
                            <div>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '350px' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        className="user-details-field"
                                        id="fullName"
                                        label="Full Name"
                                        variant="outlined"
                                        value={formValues.fullName}
                                        onChange={handleChange}
                                        error={errors.fullName}
                                        helperText={errors.fullName ? 'This field is required' : ''}
                                        InputProps={{
                                            sx: {
                                                borderRadius: '10px',
                                            },
                                        }}
                                    />
                                    <TextField
                                        className="user-details-field"
                                        id="email"
                                        label="Email Address"
                                        variant="outlined"
                                        value={formValues.email}
                                        onChange={handleChange}
                                        error={errors.email}
                                        helperText={errors.email ? 'This field is required' : ''}
                                        InputProps={{
                                            sx: {
                                                borderRadius: '10px',
                                            },
                                        }}
                                        sx={{
                                            mb: 1,
                                        }}
                                    />
                                    <TextField
                                        className="user-details-field"
                                        id="phoneNumber"
                                        label="Phone Number"
                                        variant="outlined"
                                        value={formValues.phoneNumber}
                                        onChange={handleChange}
                                        error={errors.phoneNumber}
                                        helperText={errors.phoneNumber ? 'This field is required' : ''}
                                        InputProps={{
                                            sx: {
                                                borderRadius: '10px',
                                            },
                                        }}
                                        sx={{
                                            mb: 1,
                                        }}
                                    />
                                    <Box sx={{ minWidth: 400, display: 'inline' }}>
                                        <FormControl variant="outlined" style={{ marginTop: '9px' }} error={errors.country}>
                                            <InputLabel id="demo-simple-select-label">Enter the Country</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="country"
                                                value={formValues.country}
                                                onChange={handleCountryChange}
                                                label="Enter the Country"
                                                style={{ width: '350px', borderRadius: '10px' }}
                                                MenuProps={{
                                                    PaperProps: {
                                                        sx: {
                                                            maxHeight: 200,
                                                            overflow: 'auto',
                                                            zIndex: 1302,
                                                        },
                                                    },
                                                }}
                                            >
                                                {countries.map((country, index) => (
                                                    <MenuItem key={index} value={country.alpha2Code}>
                                                        <img src={country.flags.svg} alt={country.name} style={{ width: '20px', height: '20px', marginRight: '5px', borderRadius: '50%' }} />
                                                        {country.name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                            {errors.country && <p style={{ color: '#d32f2f', fontSize: '12px', marginTop: '5px', marginLeft: '10px' }}>This field is required</p>}
                                        </FormControl>
                                    </Box>
                                    <TextField
                                        className="user-details-field"
                                        id="state"
                                        label="State/Region"
                                        variant="outlined"
                                        value={formValues.state}
                                        onChange={handleChange}
                                        error={errors.state}
                                        helperText={errors.state ? 'This field is required' : ''}
                                        InputProps={{
                                            sx: {
                                                borderRadius: '10px',
                                            },
                                        }}
                                        sx={{
                                            mb: 1,
                                        }}
                                    />
                                    <TextField
                                        className="user-details-field"
                                        id="city"
                                        label="City"
                                        variant="outlined"
                                        value={formValues.city}
                                        onChange={handleChange}
                                        error={errors.city}
                                        helperText={errors.city ? 'This field is required' : ''}
                                        InputProps={{
                                            sx: {
                                                borderRadius: '10px',
                                            },
                                        }}
                                        sx={{
                                            mb: 1,
                                        }}
                                    />
                                    <TextField
                                        className="user-details-field"
                                        id="address"
                                        label="Address"
                                        variant="outlined"
                                        value={formValues.address}
                                        onChange={handleChange}
                                        error={errors.address}
                                        helperText={errors.address ? 'This field is required' : ''}
                                        InputProps={{
                                            sx: {
                                                borderRadius: '10px',
                                            },
                                        }}
                                        sx={{
                                            mb: 1,
                                        }}
                                    />
                                    <TextField
                                        className="user-details-field"
                                        id="zip"
                                        label="Zip/Code"
                                        variant="outlined"
                                        value={formValues.zip}
                                        onChange={handleChange}
                                        error={errors.zip}
                                        helperText={errors.zip ? 'This field is required' : ''}
                                        InputProps={{
                                            sx: {
                                                borderRadius: '10px',
                                            },
                                        }}
                                        sx={{
                                            mb: 1,
                                        }}
                                    />
                                    <TextField
                                        className="user-details-field"
                                        id="company"
                                        label="Company"
                                        variant="outlined"
                                        value={formValues.company}
                                        onChange={handleChange}
                                        error={errors.company}
                                        helperText={errors.company ? 'This field is required' : ''}
                                        InputProps={{
                                            sx: {
                                                borderRadius: '10px',
                                            },
                                        }}
                                        sx={{
                                            mb: 1,
                                        }}
                                    />
                                    <TextField
                                        className="user-details-field"
                                        id="role"
                                        label="Role"
                                        variant="outlined"
                                        value={formValues.role}
                                        onChange={handleChange}
                                        error={errors.role}
                                        helperText={errors.role ? 'This field is required' : ''}
                                        InputProps={{
                                            sx: {
                                                borderRadius: '10px',
                                            },
                                        }}
                                        sx={{
                                            mb: 1,
                                        }}
                                    />
                                    <br />
                                    <br />
                                    <div className='button-container'>
                                        <Stack direction="row" spacing={2} sx={{}}>
                                            <Button
                                                className='create-user-button'
                                                sx={{ textTransform: 'none', borderRadius: '10px' }}
                                                onClick={handleSubmit}
                                            >
                                                Create User
                                            </Button>
                                        </Stack>
                                    </div>
                                    <br />
                                </Box>

                            </div>
                        </DemoPapers>
                    </Stack>
                </div>
            </div>
        </div>
    );
}
export default CreateScreen;
