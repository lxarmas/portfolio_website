import React from "react";
import { useNavigate } from "react-router-dom";
import main from "./images/main.jpg";


function Header() {
    const navigate = useNavigate();

    const Submit = () => {
        navigate("/booking");
    }

    return (
            <header className="header">
      <section>
        <div className="banner">
          <h2 className="titleHeader">Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes servred with a modern twist.
          </p>
        <button id="button1" onClick={Submit}>Reserve a  Table</button>
        </div>
        <div className="banner-img">
           <img src={main} alt="img" width={178} height={100} id="main"/>
        </div>
      </section>
    </header>
    )
}

export default Header;
