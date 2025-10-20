import React from "react";
import { useNavigate } from "react-router-dom";
import technology1 from "./images/tecnology1.jpg";
import "./Header.css";

function Header() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/menu");
  };

  return (
    <header className="modern-header">
      <div className="background-wrapper">
        <img src={technology1} alt="Technology background" className="background-image" />
        <div className="overlay-gradient" />
      </div>

      <div className="header-content animated">
        <h1 className="title">Full Stack Engineer</h1>
        <p className="description">
          Crafting smart, scalable apps with React, Node.js, and AWS
        </p>
        <button onClick={handleSubmit} className="primary-cta pulsate">
          View My Projects
        </button>
      </div>
    </header>
  );
}

export default Header;
