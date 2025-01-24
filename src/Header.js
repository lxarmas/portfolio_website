import React from "react";
import { useNavigate } from "react-router-dom";
import jobs_cover from "./images/jobs_cover.avif";
import './Header.css'

function Header() {
  const navigate = useNavigate();

  const Submit = () => {
    navigate( "/menu" );
  }

  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2 className="titleHeader">Experience</h2>
          <p>
            I have worked extensively making smart and efficient applcations.
          </p>
          <button id="button1" onClick={Submit}>Check my projects</button>
        </div>
        <div className="banner-img">
          <img src={jobs_cover} alt="img" width={120} height={80} id="main" />
        </div>
      </section>
    </header>
  )
}

export default Header;
