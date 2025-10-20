import React from "react";
import { useTheme } from "./context/ThemeContext";
import { motion } from "framer-motion";
import coding from "./images/coding.png";
import debug from "./images/debug.png";
import frontEnd from "./images/frontEnd.png";
import performance from "./images/performance.png";

function PortfolioShowcase() {
  const { isDarkMode } = useTheme();

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
    <section
      className={`showcase flex flex-col items-center px-6 py-24 md:py-36 ${
        isDarkMode
          ? "bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100"
          : "bg-gradient-to-b from-white to-blue-50 text-gray-900"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2
          className={`text-5xl font-extrabold mb-2 ${
            isDarkMode
              ? "bg-gradient-to-r from-cyan-300 to-sky-400 bg-clip-text text-transparent"
              : "bg-gradient-to-r from-sky-800 to-cyan-600 bg-clip-text text-transparent"
          }`}
        >
          My Skills and Expertise
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-3xl shadow-xl border text-center hover:scale-105 transition-transform duration-300 ${
              isDarkMode
                ? "bg-gray-700/30 backdrop-blur-lg border-cyan-500"
                : "bg-white/30 backdrop-blur-lg border-cyan-300"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <img
              src={project.img}
              alt={project.title}
              className="mx-auto w-42 h-48 mb-4"
            />
            <h3
              className={`text-2xl font-bold ${
                isDarkMode ? "text-cyan-300" : "text-cyan-700"
              }`}
            >
              {project.title}
            </h3>
            <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default PortfolioShowcase;
