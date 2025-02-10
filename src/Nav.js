import React from 'react';
import { Link } from 'react-router-dom';
import alex_logo from './images/alex_logo.png';
import './Nav.css';

function Nav( { isDarkMode, toggleTheme } ) {
  return (
    <nav className={`nav ${isDarkMode ? 'dark' : ''}`}>
      {/* <button
        onClick={toggleTheme}
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#333',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px',
          transition: 'background-color 0.3s ease, transform 0.2s ease',
          position: 'fixed',
          left: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
        onMouseEnter={( e ) => ( e.target.style.backgroundColor = '#555' )}
        onMouseLeave={( e ) => ( e.target.style.backgroundColor = '#333' )}
      >
        {isDarkMode ? '🌞' : '🌙'}
      </button> */}
      <img src={alex_logo} alt="header logo" />
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Projects</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/booking">Appointments</Link></li>
        <li><Link to="/login">Client Section</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
