import React from 'react';
import { Link } from 'react-router-dom';
import alex_logo from './images/alex_logo.png';
import './Nav.css';

function Nav( { isDarkMode } ) {
  return (
    <nav className={`nav ${isDarkMode ? 'dark' : ''}`}>
      <div className="nav-container">
        <Link to="/">
          <img src={alex_logo} alt="Alex Logo" className="logo" />
        </Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Projects</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/booking">Appointments</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
