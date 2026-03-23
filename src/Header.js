import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const STACK = ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL", "GraphQL"];

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
      spotlight.style.background = `radial-gradient(600px circle at ${cx}px ${cy}px, rgba(255,255,255,0.055) 0%, transparent 70%)`;
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

      {/* Index mark */}
      <div className="ph-index" aria-hidden="true">
        <span>001</span>
        <span>HERO</span>
      </div>

      {/* Main content */}
      <div className="ph-body">
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
          React · Node.js · AWS — architected end-to-end.
          <br />
          I build systems that scale and interfaces people remember.
        </p>

        <div className="ph-stack">
          {STACK.map((s) => (
            <span key={s} className="ph-chip">{s}</span>
          ))}
        </div>

        <div className="ph-actions">
          <button
            type="button"
            className="ph-btn-primary"
            onClick={() => navigate("/menu")}
          >
            <span>View Projects</span>
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 13L13 3M13 3H6M13 3V10"
                stroke="currentColor" strokeWidth="1.25"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <a href="/resume.pdf" className="ph-btn-ghost" download>
            Résumé
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="ph-bar">
        <div className="ph-avail">
          <span className="ph-dot" aria-hidden="true" />
          Open to offers
        </div>
        <div className="ph-scroll" aria-hidden="true">
          <div className="ph-scroll-track">
            <div className="ph-scroll-thumb" />
          </div>
        </div>
        <span className="ph-loc">Los Angeles, CA</span>
      </div>
    </header>
  );
}

export default Header;
