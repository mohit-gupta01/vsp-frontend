import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './../assets/logo2.png';


const Login = () => {
    const navigate = useNavigate();
    const handleLogin = ()=>{
        navigate('/');
    }
    return (
        <div className="body-container">
            <div className='register-page'>
                <div className="logo-image">
                    <img src={logo} alt="" />
                </div>
                <span className="heading">Login</span>
                <form className='register-form' onSubmit={handleLogin}>
                    <input type="text" name="username" id="username" placeholder='Username' />
                    <input type="password" name="password" id="password" placeholder='Password' />
                    <button type="submit">Login</button>
                </form>
                <div className="already-registered">
                    <span>New user! <Link to={'/register'}>Register</Link> </span>
                </div>
            </div>
        </div>
    )
}

export default Login;