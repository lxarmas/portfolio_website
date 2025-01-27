import React from 'react';
import { Link } from 'react-router-dom';
import alex_logo from "./images/alex_logo.png";
import './Nav.css'

function Nav() {
  return (
    <nav className="nav">
      <img src={alex_logo} alt='headerlogo' width={200} height={135} />
      <ul className='nav-links'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Projects</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><Link to="/order-online">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;