import React, { useEffect, useRef } from "react";
import "./About.css";

const FACTS = [
  { label: "Based in",   value: "Los Angeles, CA" },
  { label: "Focus",      value: "Full-Stack Development" },
  { label: "Background", value: "Photography → Engineering" },
  { label: "Available",  value: "Open to opportunities" },
];

const SKILLS = [
  "React", "Next.js", "Node.js", "PostgreSQL",
  "TypeScript", "REST APIs", "Tailwind CSS", "AWS",
];

function About() {
  const sectionRef  = useRef(null);
  const spotRef     = useRef(null);

  // Cursor spotlight — same as Header
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
    <section className="pa" ref={sectionRef}>
      {/* Spotlight */}
      <div className="pa-spotlight" ref={spotRef} />
      <div className="pa-body">

        {/* Left col — text */}
        <div className="pa-left">

          <div className="pa-eyebrow">
            <span className="pa-line" />
            About me
          </div>

          <h2 className="pa-title">
            <span className="pa-word pa-word--1">Photographer</span>
            <span className="pa-word pa-word--2">turned <em>engineer.</em></span>
          </h2>

          <p className="pa-bio">
            Hi, I'm Alejandro — a full-stack developer with a background in
            portrait photography. I build modern, user-friendly applications
            spanning React on the front-end to Node.js and PostgreSQL on the back-end.
          </p>

          <p className="pa-bio pa-bio--2">
            My journey started with curiosity about what powers things behind the
            screen. That curiosity became a craft — solving problems and creating
            intuitive experiences that actually feel good to use.
          </p>

       
        </div>

        {/* Right col — facts + skills */}
        <div className="pa-right">

          {/* Facts */}
          <ul className="pa-facts">
            {FACTS.map(({ label, value }) => (
              <li key={label} className="pa-fact">
                <span className="pa-fact-label">{label}</span>
                <span className="pa-fact-value">{value}</span>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="pa-divider" />

          {/* Skills */}
          <div className="pa-skills-label">Stack</div>
          <div className="pa-stack">
            {SKILLS.map((s) => (
              <span key={s} className="pa-chip">{s}</span>
            ))}
          </div>

        </div>
      </div>

     
    </section>
  );
}

export default About;