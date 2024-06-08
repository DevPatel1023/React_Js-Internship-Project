import React, { useState, useEffect } from 'react';
import '../CSS/edit.css';
import UploadPhoto from '../Images/icons/uploadPhoto_icon.svg';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
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
import Avatar1 from '../Images/avatars/avatar_2.jpg';
import Stack from '@mui/material/Stack'; // Add this import

const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 400,
    height: 620,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    borderRadius: 25,
    [theme.breakpoints.down('md')]: {
        width: 750,
    },
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'black !important',
    },
    '& .MuiFormLabel-root.Mui-focused': {
        color: 'black !important',
    },
}));

const CustomFormControl = styled(FormControl)(({ theme }) => ({
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'black !important',
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: 'black !important',
    },
}));

const CustomSelect = styled(Select)(({ theme }) => ({
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'black !important',
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
        fullName: 'Vishrey Chotalia',
        email: 'vishreychotalia@gmaiil.com',
        phoneNumber: '123456789',
        country: '',
        state: 'Gujarat',
        city: 'Nadiad',
        address: '908 Jack Locks',
        zip: '387370',
        company: 'Elecon',
        role: 'Web Developer'
    });
    const [errors, setErrors] = useState({});
    const [isPhotoUploaded, setIsPhotoUploaded] = useState(true);
    const [avatarImage, setAvatarImage] = useState(Avatar1); // State to store the avatar image URL

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

        if (!hasErrors) {
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
                imgbox.style.border = '1px dotted rgb(146, 150, 154)';
            }
            console.log('Form Submitted', formValues);
        }
    };

    const handleUploadPhotoClick = () => {
        document.getElementById('upload-photo-input').click();
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setAvatarImage(reader.result); // Set the newly uploaded image as the avatar
            setIsPhotoUploaded(true);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };
    useEffect(() => {
        axios.get('https://restcountries.com/v2/all')
            .then(response => {
                setCountries(response.data);
                const india = response.data.find(country => country.name === 'India');
                if (india) {
                    setFormValues(prevValues => ({ ...prevValues, country: india.alpha2Code }));
                }
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
                    Edit Vishrey Chotalia
                </span>
            </div>
            <br /><br />
            <div className="innner-container-handeler">
                <div style={{
                    marginLeft: '10px', display: 'flex',
                    gap: '15px'
                }}>
                    <Stack direction="row" spacing={2}>
                        <DemoPaper className='demo-page'>
                            <h3 className='profile-information-title'>
                                Profile Information
                            </h3>
                            <br />
                            <Box
                                id='imagebox-borderline'
                                sx={{
                                    border: '1px dotted rgb(146, 150, 154)',
                                    borderRadius: '10px',
                                    padding: '1rem',
                                    position: 'relative'
                                }}
                            >
                                <div className="upload-image" onClick={handleUploadPhotoClick} style={{ cursor: 'pointer' }}>
                                    <input
                                        id="upload-photo-input"
                                        type="file"
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        onChange={handlePhotoChange}
                                    />
                                    <div id="imagebox-inner"
                                        style={{
                                            backgroundColor: isPhotoUploaded ? 'transparent' : 'rgba(255, 86, 48, 0.08)',
                                            borderRadius: '10px',
                                            textAlign: 'center',
                                            position: 'relative'
                                        }}
                                    >
                                        {isPhotoUploaded && avatarImage ? (
                                            <img src={avatarImage} alt="Uploaded Avatar" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
                                        ) : (
                                            <>
                                                <img src={UploadPhoto} alt="Upload" style={{ width: '150px', height: '150px' }} />
                                                <p className="upload-photo">Upload photo</p>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </Box>
                            <br /><br />
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { marginBottom: 1, width: '100%' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <CustomTextField
                                    id="fullName"
                                    label="Full Name"
                                    variant="outlined"
                                    value={formValues.fullName}
                                    onChange={handleChange}
                                    error={errors.fullName}
                                    helperText={errors.fullName && 'This field is required'}
                                />
                                <CustomTextField
                                    id="email"
                                    label="Email"
                                    variant="outlined"
                                    value={formValues.email}
                                    onChange={handleChange}
                                    error={errors.email}
                                    helperText={errors.email && 'This field is required'}
                                />
                                <CustomTextField
                                    id="phoneNumber"
                                    label="Phone Number"
                                    variant="outlined"
                                    value={formValues.phoneNumber}
                                    onChange={handleChange}
                                    error={errors.phoneNumber}
                                    helperText={errors.phoneNumber && 'This field is required'}
                                />
                                <CustomFormControl>
                                    <InputLabel id="country-label">Country</InputLabel>
                                    <CustomSelect
                                        labelId="country-label"
                                        id="country"
                                        value={formValues.country}
                                        onChange={handleCountryChange}
                                        error={errors.country}
                                    >
                                        {countries.map((country) => (
                                            <MenuItem key={country.alpha2Code} value={country.alpha2Code}>
                                                {country.name}
                                            </MenuItem>
                                        ))}
                                    </CustomSelect>
                                </CustomFormControl>
                                <CustomTextField
                                    id="state"
                                    label="State"
                                    variant="outlined"
                                    value={formValues.state}
                                    onChange={handleChange}
                                    error={errors.state}
                                    helperText={errors.state && 'This field is required'}
                                />
                                <CustomTextField
                                    id="city"
                                    label="City"
                                    variant="outlined"
                                    value={formValues.city}
                                    onChange={handleChange}
                                    error={errors.city}
                                    helperText={errors.city && 'This field is required'}
                                />
                                <CustomTextField
                                    id="address"
                                    label="Address"
                                    variant="outlined"
                                    value={formValues.address}
                                    onChange={handleChange}
                                    error={errors.address}
                                    helperText={errors.address && 'This field is required'}
                                />
                                <CustomTextField
                                    id="zip"
                                    label="ZIP Code"
                                    variant="outlined"
                                    value={formValues.zip}
                                    onChange={handleChange}
                                    error={errors.zip}
                                    helperText={errors.zip && 'This field is required'}
                                />
                                <CustomTextField
                                    id="company"
                                    label="Company"
                                    variant="outlined"
                                    value={formValues.company}
                                    onChange={handleChange}
                                    error={errors.company}
                                    helperText={errors.company && 'This field is required'}
                                />
                                <CustomTextField
                                    id="role"
                                    label="Role"
                                    variant="outlined"
                                    value={formValues.role}
                                    onChange={handleChange}
                                    error={errors.role}
                                    helperText={errors.role && 'This field is required'}
                                />
                                <FormControlLabel
                                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                    label="Assign Role"
                                />
                            </Box>
                        </DemoPaper>
                    </Stack>
                </div>
            </div>
        </div>
    );
}

export default CreateScreen;
