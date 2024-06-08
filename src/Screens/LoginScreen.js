import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  UserProfile  from './UserProfile';
import DashboardImage from '../Images/authentication dash img/illustration_dashboard.png';
import IconsJWT from '../Images/icons/ic_jwt.svg';
import IconFirebase from '../Images/icons/ic_firebase.svg';
import IconAmplify from '../Images/icons/ic_amplify.svg';
import IconAuth from '../Images/icons/ic_auth0.svg';
import IconSupabase from '../Images/icons/supabase.svg';
import info from '../Images/icons/info-icon.svg';
import eyeIcon from '../Images/icons/eyeIcon.svg';
import eyeClose from '../Images/icons/close-eye.svg';
import '../CSS/login.css';
import Logo from '../Components/Logo';


function LoginScreen() {
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordShow = () => {
        setShowPassword(!showPassword);
    };
    const navigate = useNavigate();

    const onLoginBtn = () => {
      navigate('/profile');
    };

    return (
        <main className="container">
            {/* The partition of the image part and the login form part in the ratio of 60% and 40% width */}
            <div className="partition-image">
                {/* welcome heading of the website */}
                <h3 className="welcome-heading">Hi, Welcome back</h3>

                {/* logo of the website */}
                <Logo className="logo"/>

                {/* main dashboard image */}
                <div className="img-container">
                    <img className="dash-img-login" src={DashboardImage} alt="Dashboard" />
                </div>

                {/* icons of the technology */}
                <div className="tech-icons">
                    {/* JWT */}
                    <a href="#">
                        <img src={IconsJWT} alt="" className="icons" />
                    </a>
                    {/* FireBase */}
                    <a href="#">
                        <img src={IconFirebase} alt="" className="icons" />
                    </a>
                    {/* Amplify */}
                    <a href="#">
                        <img src={IconAmplify} alt="" width="32px" height="32px" />
                    </a>
                    {/* Auth0 */}
                    <a href="#">
                        <img src={IconAuth} alt="" className="icons" />
                    </a>
                    {/* Supabase */}
                    <a href="#">
                        <img src={IconSupabase} alt="" className="icons" />
                    </a>
                </div>
            </div>

            {/* login form partition */}
            <main className="partition-login">
                <form action="#" className="login-form">
                    {/* form heading */}
                    <h3 className="welcome-login-heading">Sign in to Minimal</h3>
                    <br />
                    {/* create account link */}
                    <p className='create-account-text-link'>
                        New user?<a href="#" className="signup-link">Create an account</a>
                    </p>
                    {/* sample email and password */}
                    <div className="user-name-password-container">
                        <img src={info} className='info-icon' alt="abc" width="30px" />
                        <p>
                            Use email : <strong>demo@minimals.cc</strong> / <br /> password : <strong>demo1234</strong>
                        </p>
                    </div>
                    <input type="email" className="email-box" placeholder="Email address" />
                    <br />
                    <div className="password-container">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className="password-box"
                            placeholder="Password"
                            style={{ paddingRight: '40px' }}
                        />
                        {/* the eye button for showing and hiding of the password */}
                        <button
                            type="button"
                            className="eye-icon"
                            onClick={handlePasswordShow}
                        >
                            <img src={showPassword ? eyeClose : eyeIcon} alt="Toggle password visibility" width={'20px'} height={'20px'} />
                        </button>
                    </div>
                    {/* Forget password link */}
                    <a href="#" className="forget-password">Forget Password?</a>
                    <br />
                    {/* login button */}
                    <button type="button" className="login-button" onClick={onLoginBtn}>Login</button>
                </form>
            </main>
        </main>
    );
}

export default LoginScreen;
