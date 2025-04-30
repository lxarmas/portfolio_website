import React from "react";
import { motion } from "framer-motion";
import coding from "./images/coding.svg";
import debug from "./images/debug.svg";
import frontEnd from "./images/frontEnd.svg";
import performance from "./images/performance.svg";

function PortfolioShowcase() {
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


    return (
        <section className="showcase flex flex-col items-center px-6 py-200">
            <span className="portfolio first:py-200">My Skills and Expertise</span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                {projects.map( ( project, index ) => (
                    <motion.div
                        key={index}
                        className="project-card p-1 rounded-4xl shadow-lg bg-white/10 backdrop-blur-md border border-gray-400 text-center hover:scale-1 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                    >
                        <img
                            src={project.img}
                            alt={project.title}
                            className="showcase-image"

                        />


                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="mt-2">{project.description}</p>
                    </motion.div>
                ) )}
            </div>
        </section>
    );
}

export default PortfolioShowcase;
