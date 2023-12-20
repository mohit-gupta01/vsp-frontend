import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './../assets/logo2.png';

const Register = () => {
    const navigate = useNavigate();
    const handleRegister = () => {
        navigate('/');
    }
    return (
        <div className="body-container">
            <div className='register-page'>
                <div className="logo-image">
                    <img src={logo} alt="" />
                </div>
                <span className="heading">Register</span>
                <form className='register-form' onSubmit={handleRegister}>
                    <input type="text" name="username" id="username" placeholder='Username' />
                    <input type="email" name="email" id="email" placeholder='Email' />
                    <input type="password" name="password" id="password" placeholder='Password' />
                    <button type="submit">Register</button>
                </form>
                <div className="already-registered">
                    <span>Already a Registered user! <Link to={'/login'}>Login</Link> </span>
                </div>
            </div>
        </div>
    )
}

export default Register;