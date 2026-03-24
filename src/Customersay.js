import React from "react";
import "./CustomerSay.css";

const TESTIMONIALS = [
  {
    idx: "001",
    quote:
      "Exceptional code quality, every time. Clean, efficient, maintainable — and delivered without the back-and-forth most engineers need.",
    name: "Marcus Reid",
    role: "CTO · Fynlo",
    initials: "MR",
  },
  {
    idx: "002",
    quote:
      "No challenge is too big. His debugging approach is methodical — even the toughest production issues get resolved with calm precision.",
    name: "Sofia Kline",
    role: "Founder · Arcform",
    initials: "SK",
  },
  {
    idx: "003",
    quote:
      "The go-to for full-stack work. Front-end polish, back-end depth, seamless integrations — Alejandro is the rare engineer who owns the whole stack.",
    name: "Daniel Torres",
    role: "PM · Velostack",
    initials: "DT",
  },
];

function Stars() {
  return (
    <div className="cs-stars" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="cs-star" aria-hidden="true" />
      ))}
    </div>
  );
}

function CustomerSay() {
  return (
    <section className="cs">
      {/* ── Section header ── */}
      <div className="cs-header">
        <p className="cs-eyebrow">
          <span className="cs-line" />
          Social Proof
        </p>
        <h2 className="cs-heading">
          What clients
          <br />
          <em>actually say.</em>
        </h2>
        <span className="cs-count">003 — Reviews</span>
      </div>

      {/* ── Testimonial grid ── */}
      <div className="cs-grid" role="list">
        {TESTIMONIALS.map(({ idx, quote, name, role, initials }, i) => (
          <article
            key={idx}
            className={`cs-card cs-card--${i + 1}`}
            role="listitem"
          >
            <div className="cs-card-idx">
              <span>{idx}</span>
              <Stars />
            </div>

            <span className="cs-quote-mark" aria-hidden="true">"</span>

            <blockquote className="cs-quote">{quote}</blockquote>

            <div className="cs-divider" aria-hidden="true" />

            <div className="cs-author">
              <div className="cs-avatar" aria-hidden="true">
                <span className="cs-avatar-initials">{initials}</span>
              </div>
              <div className="cs-author-info">
                <span className="cs-author-name">{name}</span>
                <span className="cs-author-role">{role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* ── Bottom bar (mirrors Header) ── */}
      <div className="cs-bar">
        <span className="cs-bar-label">002 — Social Proof</span>
        <div className="cs-avail">
          <span className="cs-dot" aria-hidden="true" />
          Verified clients
        </div>
        <span className="cs-bar-label">Los Angeles, CA</span>
      </div>
    </section>
  );
}

export default CustomerSay;
