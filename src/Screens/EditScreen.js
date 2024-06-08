import React,{useState,useEffect} from 'react';
import '../CSS/edit.css';
import Stack from '@mui/material/Stack';
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
            <h2 className='create-title-txt'>Edit user</h2>
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
                        <DemoPaper className='demo-page-container'>
                            <div className="badge-container">
                                <span class="badge"><strong>Pending</strong></span>
                            </div>
                            <div className='upload-container' id='upload-container' onClick={handleUploadPhotoClick}>
                                <div className="imagebox-borderline" id='imagebox-borderline'>
                                    <img src={avatarImage} alt="avatar" className="imagebox-inner" id='imagebox-inner' />
                                </div>
                                <br />
                                <span className='upload-img-text'>Allowed *.jpeg, *.jpg, *.png, *.gif
                                    <br />max size of 3 Mb</span>
                                {isPhotoUploaded || errors.photo ? null : <p className="avatar-required-text" style={{ color: 'red' }}>Avatar is required</p>}
                                <input type="file" id="upload-photo-input" style={{ display: 'none' }} onChange={handlePhotoChange} />
                            </div>
                            <div className="email-verification">
                                <p>
                                    Banned</p>
                                <div className="verification-msg">
                                    <span className='verification-email-msg'>
                                        Disabling this will automatically send the user a verification email
                                    </span>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                                    <FormControlLabel
                                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                        color='rgb(0, 167, 111)'
                                    />
                                </div>
                            </div>
                            <div className="email-verification">
                                <p>Email Verified</p>
                                <div className="verification-msg">
                                    <span className='verification-email-msg'>
                                        Disabling this will automatically send the user a verification email
                                    </span>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                                    <FormControlLabel
                                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                        color='rgb(0, 167, 111)'
                                    />
                                </div>
                            </div>
                            <div className='button-container1'>
                                <Stack direction="row" spacing={2}>
                                    <Button
                                        className='create-user-button1'
                                        sx={{ textTransform: 'none', borderRadius: '10px' }}
                                        onClick={handleSubmit}
                                    ><strong>
                                            Delete User
                                        </strong>
                                    </Button>
                                </Stack>
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
                                    <CustomTextField
                                        className="user-details-field"
                                        id="fullName"
                                        label="Full Name"
                                        variant="outlined"
                                        value={formValues.fullName}
                                        onChange={handleChange}
                                        error={errors.fullName}
                                        helperText={errors.fullName ? 'Full Name Required' : ''}
                                        InputProps={{
                                            sx: {
                                                borderRadius: '10px',
                                            },
                                        }}
                                    />
                                    <CustomTextField
                                        className="user-details-field"
                                        id="email"
                                        label="Email Address"
                                        variant="outlined"
                                        value={formValues.email}
                                        onChange={handleChange}
                                        error={errors.email}
                                        helperText={errors.email ? 'Email Address Required' : ''}
                                        InputProps={{
                                            sx: {
                                                borderRadius: '10px',
                                            },
                                        }}
                                        sx={{
                                            mb: 1,
                                        }}
                                    />
                                    <CustomTextField
                                        className="user-details-field"
                                        id="state"
                                        label="State/Region"
                                        variant="outlined"
                                        value={formValues.state}
                                        onChange={handleChange}
                                        error={errors.state}
                                        helperText={errors.state ? 'State/Region is required' : ''}
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
                                        <CustomFormControl variant="outlined" style={{ marginTop: '9px' }} error={errors.country}>
                                            <InputLabel id="demo-simple-select-label">Enter the Country</InputLabel>
                                            <CustomSelect
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
                                                {countries.length > 0 ? (
                                                    countries.map((country, index) => (
                                                        <MenuItem key={index} value={country.alpha2Code}>
                                                            <img src={country.flags.svg} alt={country.name} style={{ width: '20px', height: '20px', marginRight: '10px', borderRadius: '50%' }} />
                                                            {country.name}
                                                        </MenuItem>
                                                    ))
                                                ) : (
                                                    <MenuItem value="" disabled>
                                                        Loading...
                                                    </MenuItem>
                                                )}
                                            </CustomSelect>
                                            {errors.country && <p style={{ color: '#d32f2f', fontSize: '12px', marginTop: '5px', marginLeft: '10px' }}>Country is Required</p>}
                                        </CustomFormControl>
                                    </Box>
                                    <CustomTextField
                                        className="user-details-field"
                                        id="phoneNumber"
                                        label="Phone Number"
                                        variant="outlined"
                                        value={formValues.phoneNumber}
                                        onChange={handleChange}
                                        error={errors.phoneNumber}
                                        helperText={errors.phoneNumber ? 'Phone Number Required' : ''}
                                        InputProps={{
                                            sx: {
                                                borderRadius: '10px',
                                            },
                                        }}
                                        sx={{
                                            mb: 1,
                                        }}
                                    />
                                    <CustomTextField
                                        className="user-details-field"
                                        id="city"
                                        label="City"
                                        variant="outlined"
                                        value={formValues.city}
                                        onChange={handleChange}
                                        error={errors.city}
                                        helperText={errors.city ? 'City is required' : ''}
                                        InputProps={{
                                            sx: {
                                                borderRadius: '10px',
                                            },
                                        }}
                                        sx={{
                                            mb: 1,
                                        }}
                                    />
                                    <CustomTextField
                                        className="user-details-field"
                                        id="address"
                                        label="Address"
                                        variant="outlined"
                                        value={formValues.address}
                                        onChange={handleChange}
                                        error={errors.address}
                                        helperText={errors.address ? 'Address is required' : ''}
                                        InputProps={{
                                            sx: {
                                                borderRadius: '10px',
                                            },
                                        }}
                                        sx={{
                                            mb: 1,
                                        }}
                                    />
                                    <CustomTextField
                                        className="user-details-field"
                                        id="zip"
                                        label="Zip/Code"
                                        variant="outlined"
                                        value={formValues.zip}
                                        onChange={handleChange}
                                        error={errors.zip}
                                        helperText={errors.zip ? 'Zip Code is required' : ''}
                                        InputProps={{
                                            sx: {
                                                borderRadius: '10px',
                                            },
                                        }}
                                        sx={{
                                            mb: 1,
                                        }}
                                    />
                                    <CustomTextField
                                        className="user-details-field"
                                        id="company"
                                        label="Company"
                                        variant="outlined"
                                        value={formValues.company}
                                        onChange={handleChange}
                                        error={errors.company}
                                        helperText={errors.company ? 'Company Name is required' : ''}
                                        InputProps={{
                                            sx: {
                                                borderRadius: '10px',
                                            },
                                        }}
                                        sx={{
                                            mb: 1,
                                        }}
                                    />
                                    <CustomTextField
                                        className="user-details-field"
                                        id="role"
                                        label="Role"
                                        variant="outlined"
                                        value={formValues.role}
                                        onChange={handleChange}
                                        error={errors.role}
                                        helperText={errors.role ? 'Role in the company is required' : ''}
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
                                        <Stack direction="row" spacing={2}>
                                            <Button
                                                className='create-user-button'
                                                sx={{ textTransform: 'none', borderRadius: '10px' }}
                                                onClick={handleSubmit}
                                            >
                                                Save Changes
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


