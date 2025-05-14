import React from "react";
import { useNavigate } from "react-router-dom";

import tecnology1 from './images/tecnology1.jpg'


import './Header.css';

function Header() {
  const navigate = useNavigate();

  const Submit = () => {
    navigate( "/menu" );
  };

  return (
    <header className="clean-header">
      <div className="header-background">
        <img src={tecnology1} alt="tech background" />
        <div className="header-overlay">
          <h1 className="main-title">Full Stack Engineer</h1>
          <p className="subtitle">Building smart apps with React, Node.js, and AWS</p>
          <button onClick={Submit} className="cta-button">View My Projects</button>
        </div>
      </div>
    </header>


  );
}

export default Header;
