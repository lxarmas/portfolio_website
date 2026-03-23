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
      "Finding and squashing bugs is my superpower. With an analytical approach and a problem-solving mindset, I turn frustrating issues into smooth experiences.",
    img: debug,
  },
  {
    index: "02",
    title: "Innovative Coding",
    description:
      "Bringing ideas to life with clean, efficient, and innovative code. From web apps to full-stack solutions, I turn challenges into functional, elegant results.",
    img: coding,
  },
  {
    index: "03",
    title: "Front-end Development",
    description:
      "Transforming user experiences with responsive, visually precise interfaces. I build fast, interactive apps using modern libraries and frameworks.",
    img: frontEnd,
  },
  {
    index: "04",
    title: "Database Management",
    description:
      "Designing, optimizing, and managing databases for scalable data handling. I specialise in PostgreSQL and MySQL for robust back-end support.",
    img: performance,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

function PortfolioShowcase() {
  return (
    <section className="ps">
      {/* Section header */}
      <motion.div
        className="ps-header"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="ps-eyebrow">
          <span className="ps-line" />
          Skills &amp; Expertise
        </p>
        <h2 className="ps-title">
          What I bring<br />
          to the <em>table.</em>
        </h2>
      </motion.div>

      {/* Cards grid */}
      <div className="ps-grid">
        {SKILLS.map((skill, i) => (
          <motion.div
            key={skill.index}
            className="ps-card"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            {/* Card index */}
            <span className="ps-card-index" aria-hidden="true">
              {skill.index}
            </span>

            {/* Image */}
            <div className="ps-card-img-wrap">
              <img
                src={skill.img}
                alt={skill.title}
                className="ps-card-img"
              />
            </div>

            {/* Text */}
            <div className="ps-card-body">
              <h3 className="ps-card-title">{skill.title}</h3>
              <p className="ps-card-desc">{skill.description}</p>
            </div>

            {/* Hover rule */}
            <div className="ps-card-rule" aria-hidden="true" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default PortfolioShowcase;
