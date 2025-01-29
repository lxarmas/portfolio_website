import React from "react";
import coding from "./images/coding.webp";
// import debug from "./images/debug.jpg";
import "./Header.css";

function PortfolioShowcase() {
    const projects = [
        {
            title: "Innovative Coding",
            description: "Bringing ideas to life with clean, efficient, and innovative code. From web apps to full-stack solutions, I love turning challenges into functional, elegant solutions.",
            img: coding
        },
        {
            title: "Debugging Mastery",
            description: "Finding and squashing bugs is my superpower! With an analytical approach and problem-solving mindset, I turn frustrating issues into smooth experiences.",
            // img: debug
        }
    ];

    const handleLinkedInClick = () => {
        window.open( "https://www.linkedin.com/in/alejandroarmas66/", "_blank", "noopener,noreferrer" );
    };

    return (
        <section className="portfolio-showcase">
            <div className="header">
                <h2>Alex Armas - Software Engineer</h2>
                <button id="button1" onClick={handleLinkedInClick}>Contact Us</button>
            </div>
            <div className="projects-list">
                {projects.map( ( project, index ) => (
                    <div key={index} className="project">
                        <h3>{project.title}</h3>
                        <img src={project.img} alt={project.title} />
                        <p>{project.description}</p>
                    </div>
                ) )}
            </div>
        </section>
    );
}

export default PortfolioShowcase;
