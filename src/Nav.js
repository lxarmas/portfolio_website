import React from 'react';
import { Link } from 'react-router-dom';
import alex_logo from './images/alex_logo.png';
import './Nav.css';

function Nav( { isDarkMode } ) {
  return (
    <nav className={`nav ${isDarkMode ? 'dark' : ''}`}>
      <ul className="nav-links">
        <img src={alex_logo} alt="header logo" />
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Projects</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/booking">Appointments</Link></li>

      </ul>
    </nav>
  );
}

export default Nav;
