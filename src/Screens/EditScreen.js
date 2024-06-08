import React from 'react';
// import '../CSS/edit.css';
import UploadPhoto from '../Images/icons/uploadPhoto_icon.svg';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/system';
import Avatar_1 from '../Images/avatars/avatar_2.jpg'


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

function EditScreen() {
    return (
        <>
            <div className='container-edit'>
                <div className='edit-container'>
                    <h2 className='edit-title-txt'>Edit</h2>
                    <div className='nav-link-container'>
                        <span className='current-location'>
                            <a className='navigation-links' href="#">Dashboard</a>
                            <ul type='.'><li></li></ul>
                            <a className='navigation-links' href="">User</a>
                            <ul type='.'><li></li></ul>
                            Lucian Obrien
                        </span>
                    </div>
                </div>
                <div style={{
                    marginLeft: '10px', display: 'flex',
                    gap: '15px'
                }}>
                    <Stack direction="row" spacing={2}>
                        <DemoPaper className='demo-page-container' style={{ height: '450px' }}>
                            <div className='upload-container' id='upload-container'>
                                <div className="imagebox-borderline" id='imagebox-borderline'>
                                    <div className="imagebox-inner" id='imagebox-inner'>
                                        <img src={Avatar_1} className='image-upload' alt="avatar" onHover />
                                    </div>
                                </div>
                                <br />
                                <span className='upload-img-text'>Allowed *.jpeg, *.jpg, *.png, *.gif
                                    <br />max size of 3 Mb</span>

                                <input type="file" id="upload-photo-input" style={{ display: 'none' }} />
                            </div>
                            <div className="email-verification">
                                <p>Email Verified</p>
                                <div className="verification-msg">
                                    
                                    <span className='verification-email-msg'>
                                        Disabling this will automatically send the user a verification email
                                    </span>
                                    <FormControlLabel
                                        control={<Switch sx={{ m: 1 }} defaultChecked />}
                                        color='primary'
                                    />
                                </div>
                            </div>
                        </DemoPaper>
                    </Stack>
                </div>
            </div>
        </>
    )
}

export default EditScreen;
