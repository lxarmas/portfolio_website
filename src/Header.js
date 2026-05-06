import React from 'react';
import './Header.css';

const tickerItems = [
  'Available for work',
  'Full-stack engineer',
  'Portrait photographer',
  'Based in Los Angeles',
  'Remote friendly',
  'React • Node • PostgreSQL',
];

function TickerGroup({ ariaHidden = false }) {
  return (
    <div className="ph-ticker-group" aria-hidden={ariaHidden}>
      {tickerItems.map((item, index) => (
        <React.Fragment key={`${item}-${index}`}>
          <span className="ph-ticker-item">
            {index === 0 && <span className="ph-dot" aria-hidden="true" />}
            {item}
          </span>
          {index !== tickerItems.length - 1 && (
            <span className="ph-ticker-sep" aria-hidden="true">
              ✦
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default function Header() {
  return (
    <header className="ph">
      <div className="ph-spotlight" aria-hidden="true" />

      <div className="ph-index">
        <span>
          Portfolio
          <br />
          2026
        </span>
      </div>

      <div className="ph-body">
        <div className="ph-left">
          <div className="ph-eyebrow">
            <span className="ph-line" aria-hidden="true" />
            <span>Business & Systems Analyst | Full-Stack & AI Engineer 
            </span>
          </div>

          <h1 className="ph-title" aria-label="From prototype to deployed fast.">
            <span className="ph-word-wrap">
              <span className="ph-word ph-word--1">From</span>
            </span>

            <span className="ph-word-wrap">
              <span className="ph-word ph-word--2">
                <em>prototype</em>
              </span>
            </span>

            <span className="ph-word-wrap">
              <span className="ph-word ph-word--3">to</span>
            </span>

            <span className="ph-word-wrap">
              <span className="ph-word ph-word--4">deployed</span>
            </span>

            <span className="ph-word-wrap">
              <span className="ph-word ph-word--5">
                <em>fast.</em>
              </span>
            </span>
          </h1>

          <p className="ph-sub">
            I build polished web experiences with clean frontend systems,
            thoughtful motion, and backend foundations that are ready to ship.
          </p>

          <div className="ph-actions">
            <button className="ph-btn-primary" type="button">
              View projects
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M7 17L17 7M17 7H9M17 7V15"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button className="ph-btn-ghost" type="button">
              Contact
            </button>
          </div>
        </div>

        <aside className="ph-right" aria-label="Capabilities">
          <div className="ph-right-label">Selected capabilities</div>

          <article className="ph-skill-card">
            <div className="ph-skill-top">
              <div className="ph-skill-icon" aria-hidden="true">✦</div>
              <div className="ph-skill-meta">
                <div className="ph-skill-name">Frontend systems</div>
                <div className="ph-skill-desc">
                  Responsive interfaces with strong layout, motion, and UX detail.
                </div>
              </div>
            </div>
            <div className="ph-skill-tags">
              <span className="ph-tag">React</span>
              <span className="ph-tag">CSS</span>
              <span className="ph-tag">Animation</span>
            </div>
          </article>

          <article className="ph-skill-card">
            <div className="ph-skill-top">
              <div className="ph-skill-icon" aria-hidden="true">◼</div>
              <div className="ph-skill-meta">
                <div className="ph-skill-name">Backend delivery</div>
                <div className="ph-skill-desc">
                  APIs, databases, and deploy-ready architecture built for real products.
                </div>
              </div>
            </div>
            <div className="ph-skill-tags">
              <span className="ph-tag">Node.js</span>
              <span className="ph-tag">PostgreSQL</span>
              <span className="ph-tag">Prisma</span>
            </div>
          </article>

          <article className="ph-skill-card">
            <div className="ph-skill-top">
              <div className="ph-skill-icon" aria-hidden="true">●</div>
              <div className="ph-skill-meta">
                <div className="ph-skill-name">Currently available</div>
                <div className="ph-skill-desc">
                  Open to freelance, contract, and full-time opportunities.
                </div>
              </div>
              <span className="ph-skill-badge">
                <span className="ph-skill-badge-dot" aria-hidden="true" />
                Open
              </span>
            </div>
          </article>
        </aside>
      </div>

      <div className="ph-bar">
        <div className="ph-ticker" aria-label="Status ticker">
          <div className="ph-ticker-track">
            <TickerGroup />
            <TickerGroup ariaHidden />
          </div>
        </div>
      </div>
    </header>
  );
}