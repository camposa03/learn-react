import React from 'react'
import Visionaries from '../assets/Visionaries.png'
import './NavBar.css'
import { Link } from "react-router-dom";
import { Outlet } from 'react-router-dom';

function NavBar() {

    return (
        <>
            <nav>
                <div className="header">

                    <ul className='nav-menu'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about-us">About-Us</Link></li>
                        <li><Link to="/Testimonials">Testimonials</Link></li>
                        <li><Link to="/Programs">Programs</Link></li>
                        {/* <li><Link to="/Merchandise">Merchandise</Link></li> */}
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul>
                    {/* <div className='menu'>
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
                </div> */}
                </div>
            </nav>
            <Outlet />
            <footer>Footer</footer>
        </>
    );
};

export default NavBar