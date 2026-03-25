import React from "react";
import { motion } from "framer-motion";
import coding from "./images/coding.png";
import debug from "./images/debug.png";
import frontEnd from "./images/frontEnd.png";
import performance from "./images/performance.png";
import "./PortfolioShowcase.css";

const SKILLS = [
  {
    index: "01",
    title: "Debugging Mastery",
    description:
      "Finding and squashing bugs is my superpower. Analytical approach, problem-solving mindset — I turn frustrating issues into smooth experiences.",
    img: debug,
  },
  {
    index: "02",
    title: "Innovative Coding",
    description:
      "Bringing ideas to life with clean, efficient code. From web apps to full-stack solutions, I turn challenges into elegant results.",
    img: coding,
  },
  {
    index: "03",
    title: "Front-end Development",
    description:
      "Responsive, visually precise interfaces. Fast, interactive apps using modern libraries and frameworks.",
    img: frontEnd,
  },
  {
    index: "04",
    title: "Database Management",
    description:
      "Scalable data handling with PostgreSQL and MySQL. Designed for performance from the ground up.",
    img: performance,
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const card = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

function PortfolioShowcase() {
  return (
    <section className="ps">
      {/* Header */}
      <motion.div
        className="ps-header"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
      
        <h2 className="ps-title">
          What I bring<br />to the <em>table.</em>
        </h2>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="ps-grid"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {SKILLS.map((skill) => (
          <motion.div key={skill.index} className="ps-card" variants={card}>
            {/* Illustration area */}
            <div className="ps-card-img-wrap">
              <img
                src={skill.img}
                alt={skill.title}
                className="ps-card-img"
              />
            </div>

            {/* Text area */}
            <div className="ps-card-body">
              <span className="ps-card-index">{skill.index}</span>
              <h3 className="ps-card-title">{skill.title}</h3>
              <p className="ps-card-desc">{skill.description}</p>
            </div>

            {/* Hover accent line */}
            <div className="ps-card-accent" aria-hidden="true" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default PortfolioShowcase;
