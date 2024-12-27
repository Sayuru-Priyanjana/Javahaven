import React from "react";
import './navbar.css';

function NavBar(){
    return(
    <div className="navbar">
        <div className="navbar-content">
            <h1 className="logo">Java Haven</h1>
            <nav className="nav">
                <a href="#">Home</a>
                <a href="#">Menu</a>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
            </nav>
            <div className="right-links">
                <a href="#" className="signin">Sign In</a>
                <a href="#" className="signup">Sign Up</a>
            </div>
        </div>
    </div>

    );

}

export default NavBar;