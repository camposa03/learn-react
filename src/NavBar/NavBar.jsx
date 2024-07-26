import React from 'react'
import ReactDOM from 'react-dom/client'
import Visionaries from '../assets/Visionaries.png'
import './NavBar.css'

function NavBar() {

return (

    
    <nav>
    <div className="header">
        <img src={Visionaries} alt="" />
        <ul className='nav-menu'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Programs</a></li>   
            <li><a href="#">Merchandise</a></li>
            <li><a href="#">Contact</a></li>             
        </ul>
    <div className='menu'>
        <i className='menuIcon material-icons'>menu</i>
        <i className='closeIcon material-icons'>close</i>
    </div>
    <div className='nav_mobile'>
        <div className='nav_mobile_content'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Programs</a></li>   
        <li><a href="#">Merchandise</a></li>
        <li><a href="#">Contact</a></li>
        </div>
    </div>
    </div>
</nav>
);
};

export default NavBar