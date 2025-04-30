import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import alex_logo from './images/alex_logo.png';
import './Nav.css';
const handleLinkedInClick = () => {
  window.open( "https://www.linkedin.com/in/alejandroarmas66/", "_blank", "noopener,noreferrer" );
};
function Nav( { isDarkMode } ) {

  return (
    <nav className={`nav ${isDarkMode ? 'dark' : ''}`}>
      <div className="nav-container">
        <Link to="/">
          <img src={alex_logo} alt="Alex Logo" className="logo" />
        </Link>
        <motion.button
          id="connect-button"
          onClick={handleLinkedInClick}
          whileHover={{ scale: 1.05, y: -1 }}
          whileTap={{ scale: 0.95 }}
          className="py-3 px-6 text-lg bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-medium rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:brightness-110 mt-8"
        >
          Let's Connect
        </motion.button>
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
