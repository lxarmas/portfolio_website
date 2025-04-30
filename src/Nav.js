import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import alex_logo from './images/alex_logo.png';
import './Nav.css';

const handleLinkedInClick = () => {
  window.open( "https://www.linkedin.com/in/alejandroarmas66/", "_blank", "noopener,noreferrer" );
};

function Nav( { isDarkMode } ) {
  const [isMenuOpen, setIsMenuOpen] = useState( false );

  return (
    <nav className={`nav ${isDarkMode ? 'dark' : ''}`}>
      <div className="nav-container">
        <Link to="/">
          <img src={alex_logo} alt="Alex Logo" className="logo" />
        </Link>

        <button className="menu-toggle" onClick={() => setIsMenuOpen( !isMenuOpen )}>
          ☰
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsMenuOpen( false )}>Home</Link></li>
          <li><Link to="/menu" onClick={() => setIsMenuOpen( false )}>Projects</Link></li>
          <li><Link to="/about" onClick={() => setIsMenuOpen( false )}>About</Link></li>
          <li><Link to="/booking" onClick={() => setIsMenuOpen( false )}>Appointments</Link></li>
          <motion.button
            id="connect-button"
            onClick={handleLinkedInClick}
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            className="py-3 px-6 text-lg bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-medium rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:brightness-110"
          >
            Let's Connect
          </motion.button>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
