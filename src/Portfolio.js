import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import worthyreads   from "./images/worthyreads.png";
import ninjagame     from "./images/visigraph.png";
import sportsSupply  from "./images/sportsSupply.png";
import "./Portfolio.css";

const PROJECTS = [
  {
    index:       "01",
    title:       "WorthyReads",
    image:       worthyreads,
    tags:        ["React", "Node.js", "JWT", "PostgreSQL"],
    description: "Full-stack book club app with secure JWT authentication and Google Books API integration.",
    links: {
      demo: "https://worthy-reads.vercel.app/",
      code: "https://github.com/lxarmas/worthy_reads",
    },
  },
  {
    index:       "02",
    title:       "Visigraph",
    image:       ninjagame,
    tags:        ["React", "Node.js", "TensorFlow.js"],
    description: "AI brand sentiment analysis tool with 85% accuracy built using React, Node.js, and TensorFlow.js.",
    links: {
      demo: "https://visigraph.vercel.app/",
      code: "https://github.com/lxarmas/visigraph.git",
    },
  },
  {
    index:       "03",
    title:       "Fitness Rack",
    image:       sportsSupply,
    tags:        ["React", "Redux", "E-Commerce"],
    description: "E-commerce platform with optimized state management, boosting conversion rate by 40%.",
    links: {
      demo:  "https://taskmanager.example.com",
      code: "https://github.com/lxarmas/graceshopper",
    },
  },
];

function Portfolio() {
  const sectionRef = useRef(null);
  const spotRef    = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const spot    = spotRef.current;
    if (!section || !spot) return;

    let raf;
    let tx = window.innerWidth  / 2;
    let ty = window.innerHeight / 2;
    let cx = tx, cy = ty;

    const onMove = (e) => {
      const rect = section.getBoundingClientRect();
      tx = e.clientX - rect.left;
      ty = e.clientY - rect.top;
    };

    const animate = () => {
      cx += (tx - cx) * 0.07;
      cy += (ty - cy) * 0.07;
      spot.style.background = `radial-gradient(600px circle at ${cx}px ${cy}px, rgba(255,255,255,0.055) 0%, transparent 70%)`;
      raf = requestAnimationFrame(animate);
    };

    section.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);
    return () => {
      section.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="pp" ref={sectionRef}>
      {/* Spotlight */}
      <div className="pp-spotlight" ref={spotRef} />

      {/* Index mark */}
      <div className="pp-index">
        <span>03</span>
        <span>Work</span>
      </div>

      <div className="pp-body">

        {/* Header row */}
        <div className="pp-header">
          <div className="pp-eyebrow">
            <span className="pp-line" />
            Selected projects
          </div>
          <h2 className="pp-title">
            <span className="pp-word pp-word--1">Things I've</span>
            <span className="pp-word pp-word--2"><em>built.</em></span>
          </h2>
        </div>

        {/* Project grid */}
        <div className="pp-grid">
          {PROJECTS.map((project) => (
            <article key={project.index} className="pp-card">

              {/* Image */}
              <div className="pp-card-img-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="pp-card-img"
                />
                <div className="pp-card-overlay" />
              </div>

              {/* Content */}
              <div className="pp-card-body">
                <div className="pp-card-top">
                  <span className="pp-card-num">{project.index}</span>
                  <div className="pp-card-tags">
                    {project.tags.map((t) => (
                      <span key={t} className="pp-chip">{t}</span>
                    ))}
                  </div>
                </div>

                <h3 className="pp-card-title">{project.title}</h3>
                <p className="pp-card-desc">{project.description}</p>

                <div className="pp-card-links">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pp-btn-primary"
                  >
                    Live demo
                    <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2 12L12 2M12 2H5M12 2v7"
                        stroke="currentColor" strokeWidth="1.2"
                        strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pp-btn-ghost"
                  >
                    Source
                  </a>
                </div>
              </div>

            </article>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pp-bar">
        <span className="pp-avail">
          <span className="pp-dot" />
          Open to opportunities
        </span>
        <span className="pp-loc">Los Angeles, CA</span>
      </div>
    </section>
  );
}

export default Portfolio;