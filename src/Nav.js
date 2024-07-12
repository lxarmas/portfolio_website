import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./logo.jpg"

function Nav() {
  return (
    <nav className="nav"> 
        <img src={logo} alt='headerlogo' width={240} height={135}/> 
        <ul className='nav-links'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><Link to="/order-online">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    </nav>
  );
}

export default Nav;