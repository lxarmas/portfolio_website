import React from "react";
import about from "./images/Owners.jpg";
import "./Chicago.css"; // Import the CSS file for styling

function Chicago() {
    return (
        <section className="chicago">
            <div className="content">
                <div className="text-container">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>
                        Founded in 2020 by Mario Rossi and Adrian Garcia, Little Lemon was born out of a shared passion for authentic Mediterranean cuisine. Mario and Adrian envisioned a place where people could come together to enjoy the rich, diverse flavors of the Mediterranean, using the freshest ingredients and time-honored recipes passed down through generations.
                    </p>
                </div>
                <div className="image-container">
                    <img src={about} width={480} height={270} alt="Owners of the restaurant" />
                </div>
            </div>
        </section>
    );
}

export default Chicago;
