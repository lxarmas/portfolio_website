import React, { useState } from "react";
import { motion } from "framer-motion";
import coding from "./images/coding.webp";
import debug from "./images/debug.avif";
import "./PortfolioShowcase.css";

// Toggle for dark mode
const ThemeToggle = ( { toggleTheme } ) => {
    return (
        <button
            onClick={toggleTheme}
            className="py-2 px-4 bg-gray-800 text-white rounded-md shadow-md transition-all duration-300 hover:bg-gray-700"
        >
            Toggle Theme
        </button>
    );
};

function PortfolioShowcase() {
    const [isDarkMode, setIsDarkMode] = useState( false );

    const toggleTheme = () => {
        setIsDarkMode( prevState => !prevState );
        document.body.classList.toggle( "dark", !isDarkMode );  // Toggle dark mode on body
    };

    const projects = [
        {
            title: "Innovative Coding",
            description:
                "Bringing ideas to life with clean, efficient, and innovative code. From web apps to full-stack solutions, I love turning challenges into functional, elegant solutions.",
            img: coding,
        },
        {
            title: "Debugging Mastery",
            description:
                "Finding and squashing bugs is my superpower! With an analytical approach and problem-solving mindset, I turn frustrating issues into smooth experiences.",
            img: debug,
        },
        {
            title: "Optimizing Performance",
            description:
                "I ensure fast and smooth user experiences by optimizing both front-end and back-end performance. From lazy loading to reducing HTTP requests, I maximize efficiency.",
            img: coding,
        },
        {
            title: "Front-end Development",
            description:
                "Transforming user experiences with clean, responsive, and visually stunning interfaces. I build fast and interactive web apps using modern libraries and frameworks.",
            img: coding,
        },
        {
            title: "Database Management",
            description:
                "Designing, optimizing, and managing databases for scalable and efficient data handling. I specialize in PostgreSQL and MySQL for robust back-end support.",
            img: coding,
        },
    ];

    const handleLinkedInClick = () => {
        window.open( "https://www.linkedin.com/in/alejandroarmas66/", "_blank", "noopener,noreferrer" );
    };

    return (
        <section className={`portfolio-showcase flex flex-col items-center px-6 py-10 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
            {/* Header Section with Animation */}
            <motion.h2
                className="text-5xl font-extrabold text-center mb-8"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                My Skills & Expertise
            </motion.h2>

            {/* Dark/Light Mode Toggle */}
            <ThemeToggle toggleTheme={toggleTheme} />

            {/* CTA Button with Hover & Tap Effects */}
            <motion.button
                id="connect-button"
                onClick={handleLinkedInClick}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="py-2 text-sm bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-medium rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:brightness-110 mt-8"
            >
                Let's Connect
            </motion.button>

            {/* Projects Grid with Animations */}
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

            {/* Web Vitals optimization */}
            <div className="w-full mt-16">
                <h3 className="text-3xl font-semibold text-center mb-4">Web Vitals Optimization</h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center text-gray-400"
                >
                    I focus on improving Core Web Vitals by ensuring minimal page load time and interaction latency for a seamless user experience.
                </motion.p>
            </div>

            {/* Responsive Design Improvements */}
            <style jsx>{`
                @media (max-width: 768px) {
                    .project-card {
                        margin: 0 auto;
                        max-width: 350px;
                    }
                }
            `}</style>
        </section>
    );
}

export default PortfolioShowcase;
