import React from "react";
import about from "./images/OwnerProfile3.jpg";
import "./Chicago.css"; // Import the CSS file for styling

function Chicago( { isDarkMode } ) {
    return (
        <section className={`chicago ${isDarkMode ? "dark-mode" : ""}`}>
            <div className="content">
                <div className="text-container">
                    <h1>Why I am here</h1>
                    <h3>My story</h3>
                    <p>
                        Alex Armas is a professional commercial photographer with more than fifteen years of experience and after covid he had
                        a revelation that coding is was his next chapter in his life, since then he has created unique application systems which combine technology,
                        art and commerce.
                    </p>
                </div>
                <div className="image-container">
                    <img src={about} width={240} height={270} alt="Alex Armas headshot" />
                </div>
            </div>
        </section>
    );
}

export default Chicago;
