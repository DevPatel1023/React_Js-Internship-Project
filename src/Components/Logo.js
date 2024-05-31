import React from 'react';
import Logo_icon from '../Images/icons/ic_amplify.svg';
import '../CSS/logo.css';

function Logo() {
    return (
        <div>
            <a href="#"><img src={Logo_icon} alt="logo" className='logo-container' /></a>
        </div>
    );
}

export default Logo;
