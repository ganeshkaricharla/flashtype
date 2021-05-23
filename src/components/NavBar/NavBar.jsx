import React from 'react';
import logo from './../../assets/logo.png';
import './NavBar.css'
const NavBar = () =>{
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img src={logo} alt="Logo" className="flash-logo" />
                <p className="flash-logo-text">Flash Type</p>
            </div>

        </div>
    );
}

export default NavBar;