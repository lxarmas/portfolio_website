import React from "react";
import { useNavigate } from "react-router-dom";
import main from "./main.jpg";
import restaurant from "./restaurant.jpg"

function Calltoaction() {
    const navigate = useNavigate();

    const Submit = () => {
        navigate("/booking"); 
    }

    return (
        <section className="calltoaction">
            <div className="notimg">
                <h1 id="little">Little Lemon</h1>
                <h2 id="chi">Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
                <button id="button1" onClick={Submit}>Book a Table</button>
            </div>
            <div className="img">
                <img src={main} alt="img" width={178} height={100} id="main"/>
                <img src={restaurant} alt="rest" width={178} height={100} id="restaurant"/>
            </div>
        </section>
    )
}

export default Calltoaction;
