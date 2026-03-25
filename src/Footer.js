import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import "./Footer.css";

const NAV_LINKS = [
  { label: "Work",    href: "/work" },
  { label: "About",   href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  { label: "GitHub",   href: "https://github.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/in/" },
  { label: "Email",    href: "mailto:hello@example.com" },
];

function Footer() {
  const navigate   = useNavigate();
  const footerRef  = useRef(null);
  const spotRef    = useRef(null);

  // Cursor spotlight — mirrors Header behaviour
  useEffect(() => {
    const footer = footerRef.current;
    const spot   = spotRef.current;
    if (!footer || !spot) return;

    let raf;
    let tx = window.innerWidth  / 2;
    let ty = window.innerHeight / 2;
    let cx = tx, cy = ty;

    const onMove = (e) => {
      const rect = footer.getBoundingClientRect();
      tx = e.clientX - rect.left;
      ty = e.clientY - rect.top;
    };

    const animate = () => {
      cx += (tx - cx) * 0.07;
      cy += (ty - cy) * 0.07;
      spot.style.background = `radial-gradient(500px circle at ${cx}px ${cy}px, rgba(255,255,255,0.05) 0%, transparent 70%)`;
      raf = requestAnimationFrame(animate);
    };

    footer.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);
    return () => {
      footer.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const year = new Date().getFullYear();

  return (
    <footer className="pf" ref={footerRef}>
      {/* Spotlight */}
      <div className="pf-spotlight" ref={spotRef} />

      {/* Top divider bar */}
    

      {/* Main content */}
      <div className="pf-body">
       

        {/* Tagline */}
        <p className="pf-tagline">
          Building things that <em>matter.</em>
        </p>

        {/* Nav + Social columns */}
        <div className="pf-cols">
          <div className="pf-col">
            <span className="pf-col-label">Navigation</span>
            <ul className="pf-links">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <button
                    className="pf-link"
                    onClick={() => navigate(href)}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="pf-col">
            <span className="pf-col-label">Connect</span>
            <ul className="pf-links">
              {SOCIAL_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    className="pf-link"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {label}
                    <svg viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M2 8L8 2M8 2H4M8 2v4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pf-bottombar">
        <span className="pf-copy">© {year} · All rights reserved</span>
        <span className="pf-made">Designed &amp; built by <em>Alejandro Armas</em></span>
      </div>
    </footer>
  );
}

export default Footer;