import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';
import { useTheme } from './context/ThemeContext';
import Logo from './Logo';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode } = useTheme();




  return (
    <nav className={`nav ${isDarkMode ? 'dark' : ''}`}>
      <div className="nav-container">
      <Link to="/" className="logo-link">
  <Logo />
</Link>

        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/menu" onClick={() => setIsMenuOpen(false)}>Projects</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="/booking" onClick={() => setIsMenuOpen(false)}>Appointments</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
