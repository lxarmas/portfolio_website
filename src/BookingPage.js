import React, { useRef, useEffect } from "react";
import BookingForm from "./BookingForm";
import "./BookingPage.css";

function BookingPage({ availableTimes, dispatch }) {
  const sectionRef = useRef(null);
  const spotRef    = useRef(null);

  // Cursor spotlight — mirrors Header behaviour
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
    <section className="pb" ref={sectionRef}>
      {/* Spotlight */}
      <div className="pb-spotlight" ref={spotRef} />

      {/* Index mark */}
      <div className="pb-index">
        <span>04</span>
        <span>Booking</span>
      </div>

      <div className="pb-body">

        {/* Left — heading */}
        <div className="pb-left">
          <div className="pb-eyebrow">
            <span className="pb-line" />
            Get in touch
          </div>

          <h1 className="pb-title">
            <span className="pb-word pb-word--1">Let's work</span>
            <span className="pb-word pb-word--2"><em>together.</em></span>
          </h1>

          <p className="pb-sub">
            Have a question, project in mind, or just want to connect?
            Fill out the form and I'll get back to you promptly.
          </p>

          {/* Contact hints */}
          <ul className="pb-hints">
            <li className="pb-hint">
              <span className="pb-hint-label">Response time</span>
              <span className="pb-hint-value">Within 24 hours</span>
            </li>
            <li className="pb-hint">
              <span className="pb-hint-label">Location</span>
              <span className="pb-hint-value">Los Angeles, CA</span>
            </li>
            <li className="pb-hint">
              <span className="pb-hint-label">Availability</span>
              <span className="pb-hint-value">Open to opportunities</span>
            </li>
          </ul>
        </div>

        {/* Right — form */}
        <div className="pb-right">
          <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </div>

      </div>

      {/* Bottom bar */}
      <div className="pb-bar">
        <span className="pb-avail">
          <span className="pb-dot" />
          Open to opportunities
        </span>
        <span className="pb-loc">Los Angeles, CA</span>
      </div>
    </section>
  );
}

export default BookingPage;