import React from 'react';
import Logo_icon from '../Images/assests/Logo.svg';
import '../CSS/logo.css';

function Logo() {
    return (
        <div>
            <a href="/home"><img src={Logo_icon} alt="logo" className='logo-container' /></a>
        </div>
    );
}

export default Logo;
