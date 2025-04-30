import React from "react";
import { useNavigate } from "react-router-dom";
import tecnology from './images/tecnology.jpg'
import tecnology1 from './images/tecnology1.jpg'
import tecnology2 from './images/tecnology2.jpg'

import './Header.css';

function Header() {
  const navigate = useNavigate();

  const Submit = () => {
    navigate( "/menu" );
  };

  return (
    <header>
      <section className="banner">

        <div className="img-container">
          <div className="background-images">
            <img src={tecnology} alt="job cover" />
            <img src={tecnology1} alt="coding cover" />
            <img src={tecnology2} alt="debug cover" />
          </div>
          <div className="experience-overlay">
            <span className="title-header">Experience</span>
            <span className="title-header">Hard Work</span>
            <span className="title-header">Passion</span>
            <span className="title-header">Determination</span>
            <p>
              <span className="font-semibold">Versatile Full Stack Engineer</span> with expertise in
              <span className="font-medium"> React, Node.js, PostgreSQL,</span> and <span className="font-medium">AWS</span>.
              Led <span className="italic">AI-driven fashion apps</span>, optimized cloud deployments, and built
              high-impact e-commerce platforms.
              A <span className="font-bold">hackathon winner</span>, enhancing <span>user engagement, scalability,</span> and performance. 🚀
              <button id="button1" onClick={Submit}>My Projects</button>
            </p>
          </div>

        </div>

      </section>

    </header >
  );
}

export default Header;
