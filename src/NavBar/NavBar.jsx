import React, { useState } from 'react'
import Visionaries from '../assets/Visionaries.png'
import './NavBar.css'
import { Link } from "react-router-dom";
import { Outlet } from 'react-router-dom';

function NavBar() {

    const [nav, setNav] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true);
        } else {
            setNav(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <>
            <nav className={nav ? "nav active" : "nav"}>
                <Link to="/" className='logo'><img src={Visionaries}></img></Link>


                <span className='nav-icon'></span>

                <ul className='menu'>
                    <ul><Link to="/">Home</Link></ul>
                    <ul><Link to="/about-us">About-Us</Link></ul>
                    <ul><Link to="/Testimonials">Testimonials</Link></ul>
                    <ul><Link to="/Programs">Programs</Link></ul>
                    <ul><Link to="/BMI-Calculator">BMI Calculator</Link></ul>
                    <ul><Link to="/Contact">Contact</Link></ul>
                </ul>
            </nav>

            <Outlet />


            <footer className='footer'>Email xyz@businessmail.com for more information! You may also use our contact form, and we'll get back to you.</footer>
        </>
    );
};

export default NavBar




// by any chance while you looked at my navbar code, there is an Outlet at the end somewhere, i have an issue with my footer being in the middle of my screen for my Contact tab