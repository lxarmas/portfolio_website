import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const SKILLS = [
  {
    icon: "⬡",
    name: "Frontend Engineering",
    desc: "Pixel-precise UIs with fluid motion and zero layout debt.",
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    icon: "◈",
    name: "Backend & APIs",
    desc: "Scalable REST & GraphQL services built to handle real load.",
    tags: ["Node.js", "GraphQL", "PostgreSQL", "Redis"],
  },
  {
    icon: "△",
    name: "Cloud & Infrastructure",
    desc: "CI/CD pipelines, serverless functions, and container deployments.",
    tags: ["AWS", "Docker", "GitHub Actions", "Terraform"],
  },
  {
    icon: "◎",
    name: "Available for Projects",
    desc: "Open to freelance, contracts, and full-time roles.",
    tags: ["Remote-first", "Fast turnaround"],
    available: true,
  },
];

function Header() {
  const navigate = useNavigate();
  const spotlightRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const spotlight = spotlightRef.current;
    if (!header || !spotlight) return;

    let raf;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let cx = tx;
    let cy = ty;

    const onMove = (e) => {
      const rect = header.getBoundingClientRect();
      tx = e.clientX - rect.left;
      ty = e.clientY - rect.top;
    };

    const animate = () => {
      cx += (tx - cx) * 0.07;
      cy += (ty - cy) * 0.07;
      spotlight.style.background = `radial-gradient(700px circle at ${cx}px ${cy}px, rgba(255,255,255,0.07) 0%, transparent 70%)`;
      raf = requestAnimationFrame(animate);
    };

    header.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);
    return () => {
      header.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header className="ph" ref={headerRef}>
      <div className="ph-spotlight" ref={spotlightRef} aria-hidden="true" />

      {/* Index label */}
      <div className="ph-index" aria-hidden="true">
        <span>01 / Introduction</span>
      </div>

      {/* Two-column body */}
      <div className="ph-body">

        {/* ── Left ── */}
        <div className="ph-left">
          <p className="ph-eyebrow">
            <span className="ph-line" />
            Full Stack Engineer
          </p>

          <h1 className="ph-title">
            <span className="ph-word ph-word--1">Code</span>
            <span className="ph-word ph-word--2">
              that <em>ships.</em>
            </span>
            <span className="ph-word ph-word--3">Design</span>
            <span className="ph-word ph-word--4">
              that <em>lands.</em>
            </span>
          </h1>

          <p className="ph-sub">
            React · Node.js · Neo4j — architected end-to-end.
            <br />
            I build systems that scale and interfaces people remember.
          </p>

          <div className="ph-actions">
            <button
              type="button"
              className="ph-btn-primary"
              onClick={() => navigate("/menu")}
            >
              <span>View Projects</span>
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M3 13L13 3M13 3H6M13 3V10"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              className="ph-btn-ghost"
              onClick={() => navigate("/contact")}
            >
              Get in touch
            </button>
          </div>
        </div>

        {/* ── Right — Skills panel ── */}
        <div className="ph-right" aria-label="Skills and services">
          <p className="ph-right-label">What I bring</p>

          {SKILLS.map((skill) => (
            <div className="ph-skill-card" key={skill.name}>
              <div className="ph-skill-top">
                <div className="ph-skill-icon" aria-hidden="true">
                  {skill.icon}
                </div>
                <div className="ph-skill-meta">
                  <div className="ph-skill-name">{skill.name}</div>
                  <div className="ph-skill-desc">{skill.desc}</div>
                </div>
                {skill.available && (
                  <span className="ph-skill-badge">
                    <span className="ph-skill-badge-dot" aria-hidden="true" />
                    Open
                  </span>
                )}
              </div>
              <div className="ph-skill-tags">
                {skill.tags.map((t) => (
                  <span className="ph-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="ph-bar">
        <div className="ph-avail">
          <span className="ph-dot" aria-hidden="true" />
          Available for work
        </div>
        <div className="ph-scroll" aria-hidden="true">
          <div className="ph-scroll-track">
            <div className="ph-scroll-thumb" />
          </div>
        </div>
        <span className="ph-loc">Based in · Remote</span>
      </div>
    </header>
  );
}

export default Header;
