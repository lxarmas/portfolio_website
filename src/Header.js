import React from "react";
import { useNavigate } from "react-router-dom";
import jobs_cover from "./images/jobs_cover.avif";
import coding_two from "./images/coding_2.webp"
import debug_two from "./images/debug_two.avif"
import './Header.css';

function Header() {
  const navigate = useNavigate();

  const Submit = () => {
    navigate( "/menu" );
  };

  return (
    <header>
      <section>
        <div className="banner">

          <div className="banner-img">
            <div className="img-container">
              <img src={jobs_cover} alt="job cover" />
              <img src={coding_two} alt="coding cover" />
              <img src={debug_two} alt="debug cover" />

              <img src={jobs_cover} alt="job cover" />
              <img src={coding_two} alt="coding cover" />
              <img src={debug_two} alt="debug cover" />
            </div>
          </div>

          <h2>
            <span className="title-header text-black dark:text-white">Experience</span>
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



      </section>
    </header>
  );
}

export default Header;
