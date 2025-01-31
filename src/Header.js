import React from "react";
import { useNavigate } from "react-router-dom";
import jobs_cover from "./images/jobs_cover.avif";
import './Header.css';

function Header() {
  const navigate = useNavigate();

  const Submit = () => {
    navigate( "/menu" );
  };

  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>
            <span>Experience</span>
          </h2>

          <p>
            <span className="font-semibold">Versatile Full Stack Engineer</span> with expertise in
            <span className="font-medium"> React, Node.js, PostgreSQL,</span> and <span className="font-medium">AWS</span>.
            Led <span className="italic">AI-driven fashion apps</span>, optimized cloud deployments, and built
            high-impact e-commerce platforms.
            A <span className="font-bold">hackathon winner</span>, enhancing <span>user engagement, scalability,</span> and performance. 🚀
          </p>

          <button id="button1" onClick={Submit}>
            My Projects
          </button>
        </div>
        <div className="banner-img">
          <img src={jobs_cover} alt="job cover" />
        </div>
      </section>
    </header>
  );
}

export default Header;
