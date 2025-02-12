import React from "react";
import about from "../images/OwnerProfile3.jpg";
import "./Chicago.css";
function Chicago( { isDarkMode } ) {
    return (
        <section className={`chicago ${isDarkMode ? "dark-mode" : ""}`}>
            <div className="content">
                <div className="text-container">
                    <h1>Why I am here</h1>
                    <h3>My story</h3>
                    <p>
                        Alex Armas is a professional commercial photographer with over fifteen years of experience.
                        After the COVID pandemic, he had a revelation that coding would be the next chapter of his life.
                        Since then, he has developed unique application systems that seamlessly blend technology, art, and commerce.
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
