import React, { useEffect, useRef } from "react";
import about from "./images/ale_headshot.png";
import "./PersonalStory.css";

const TAGS = [
  "15 yrs Photography",
  "Self-taught Engineer",
  "Full-Stack",
  "Los Angeles",
];

const STATS = [
  { val: "15+", label: "Yrs Creative" },
  { val: "2x",  label: "Career Pivot"  },
  { val: "∞",   label: "Curiosity"     },
];

function PersonalStory() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const animatedEls = section.querySelectorAll(".ps-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ps-animate--in");
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold: 0.15 }
    );

    animatedEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="ps" ref={sectionRef}>

      {/* ── Two-column layout ── */}
      <div className="ps-layout">

        {/* LEFT — narrative */}
        <div className="ps-left">

          <h2 className="ps-heading ps-animate">
            Why I am <em>here.</em>
          </h2>

          <div className="ps-chapter ps-animate" style={{ "--delay": "0.1s" }}>
            <span className="ps-chapter-num">Act I — The Lens</span>
            <span className="ps-chapter-tick" aria-hidden="true" />
          </div>

          <p className="ps-body ps-body--1 ps-animate" style={{ "--delay": "0.2s" }}>
            Alejandro Armas spent fifteen years behind a camera, building a
            commercial photography practice that taught him composition, light,
            and the discipline of making something beautiful under pressure.
            When the pandemic halted everything, he didn't stop — he pivoted.
            Coding became the next craft: the same instinct for structure, now
            expressed in systems and interfaces that ship.
          </p>

       
       

          <blockquote className="ps-pull ps-animate" style={{ "--delay": "0.4s" }}>
            "Technology, art, and commerce — I've always been at the
            intersection. I just changed the tool."
          </blockquote>

          <div className="ps-tags ps-animate" style={{ "--delay": "0.5s" }}>
            {TAGS.map((t) => (
              <span key={t} className="ps-tag">{t}</span>
            ))}
          </div>

        </div>

        {/* RIGHT — photo + stats */}
        <div className="ps-right ps-animate" style={{ "--delay": "0.15s" }}>
          <div className="ps-img-frame">
            <img
              src={about}
              alt="Alejandro Armas — photographer turned engineer"
              className="ps-img"
            />
            <div className="ps-img-label" aria-hidden="true">
              <span>002</span>
              <span>Portrait</span>
            </div>
          </div>

          <div className="ps-stats">
            {STATS.map(({ val, label }) => (
              <div key={label} className="ps-stat">
                <span className="ps-stat-val">{val}</span>
                <span className="ps-stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className="ps-bar ps-animate" style={{ "--delay": "0.6s" }}>
        <span className="ps-bar-label">003 — Personal</span>
        <div className="ps-avail">
          <span className="ps-dot" aria-hidden="true" />
          Open to offers
        </div>
        <span className="ps-bar-label">Los Angeles, CA</span>
      </div>

    </section>
  );
}

export default PersonalStory;