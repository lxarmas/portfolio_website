import React from "react";
import { motion } from "framer-motion";
import coding from "./images/coding.svg";
import debug from "./images/debug.svg";
import frontEnd from "./images/frontEnd.svg";
import performance from "./images/performance.svg";
// import "./PortfolioShowcase.css";

function PortfolioShowcase( { isDarkMode } ) {
    const projects = [
        {
            title: "Debugging Mastery",
            description:
                "Finding and squashing bugs is my superpower! With an analytical approach and problem-solving mindset, I turn frustrating issues into smooth experiences.",
            img: debug,
        },
        {
            title: "Innovative Coding",
            description:
                "Bringing ideas to life with clean, efficient, and innovative code. From web apps to full-stack solutions, I love turning challenges into functional, elegant solutions.",
            img: coding,
        },
        {
            title: "Front-end Development",
            description:
                "Transforming user experiences with clean, responsive, and visually stunning interfaces. I build fast and interactive web apps using modern libraries and frameworks.",
            img: frontEnd,
        },
        {
            title: "Database Management",
            description:
                "Designing, optimizing, and managing databases for scalable and efficient data handling. I specialize in PostgreSQL and MySQL for robust back-end support.",
            img: performance,
        },
    ];

    const handleLinkedInClick = () => {
        window.open( "https://www.linkedin.com/in/alejandroarmas66/", "_blank", "noopener,noreferrer" );
    };

    return (
        <section className={`portfolio-showcase flex flex-col items-center px-6 py-10 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
            <motion.h2
                className="text-5xl font-extrabold text-center mb-8"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                My Skills & Expertise
            </motion.h2>

            <motion.button
                id="connect-button"
                onClick={handleLinkedInClick}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="py-2 text-sm bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-medium rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:brightness-110 mt-8"
            >
                Let's Connect
            </motion.button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                {projects.map( ( project, index ) => (
                    <motion.div
                        key={index}
                        className="project-card p-6 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md border border-gray-700 text-center hover:scale-105 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                    >
                        <img src={project.img} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="mt-2">{project.description}</p>
                    </motion.div>
                ) )}
            </div>
        </section>
    );
}

export default PortfolioShowcase;
