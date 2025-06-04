// Nav.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import alex_logo from './images/logo.png';
import './Nav.css';

function Nav( { isDarkMode } ) {
  const [isMenuOpen, setIsMenuOpen] = useState( false );

  return (
    <nav className={`nav ${isDarkMode ? 'dark' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo-link">
          <img src={alex_logo} alt="Alex Logo" className="logo" />
        </Link>

        <button className="menu-toggle" onClick={() => setIsMenuOpen( !isMenuOpen )}>
          ☰
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen( false )}>Home</Link>
          </li>
          <li>
            <Link to="/menu" onClick={() => setIsMenuOpen( false )}>Projects</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsMenuOpen( false )}>About</Link>
          </li>
          <li>
            <Link to="/booking" onClick={() => setIsMenuOpen( false )}>Appointments</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
