import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div className="navbar">
                <div className='navbar-items'>
                    <Link style={{textDecoration: "none", color: "#fff"}} to={"/"}><span>Dashboard</span></Link>
                    <Link style={{textDecoration: "none", color: "#fff"}} to={"/history"}><span>History</span></Link>
                    <Link style={{textDecoration: "none", color: "#fff"}} to={"/about"}><span>About</span></Link>
                    <Link style={{textDecoration: "none", color: "#fff"}} to={"/contact"}><span>Contact Us</span></Link>
                </div>
                <div className="profile">Profile</div>
            </div>
        </nav>
    );
}

export default Header;