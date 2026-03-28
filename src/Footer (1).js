/**
 * Footer.js · Chroma Minimal · 2026
 *
 * Performance contracts:
 *  • Chroma bar + dot: pure CSS keyframes — zero JS animation
 *  • Tagline: word-by-word slide-up on mount, transform+opacity only
 *  • Chroma underline on "matter": scaleX via class toggle after word lands
 *  • Link underlines: scaleX transform only (compositor thread)
 *  • Arrow: translate + opacity only
 *  • memo(): re-renders only when year changes (never)
 */

import React, { memo, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Footer.css';

/* ── Config ──────────────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: 'Work',    to: '/work',    color: 'c1' },
  { label: 'About',   to: '/about',   color: 'c2' },
  { label: 'Contact', to: '/contact', color: 'c3' },
];

const SOCIAL_LINKS = [
  { label: 'GitHub',   href: 'https://github.com/',       color: 'c4' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/',   color: 'c5' },
  { label: 'Email',    href: 'mailto:hello@example.com',   color: 'c1' },
];

/* words per line — em:true marks the italic animated word */
const TAGLINE = [
  ['Building', 'things'],
  ['that', { em: true, text: 'matter.' }],
];

const STAGGER   = 90;
const BASE_DELAY = 120;
const EASE      = 'cubic-bezier(0.16,1,0.3,1)';

/* ── Arrow icon — shared, memoised ──────────────────────────────────────── */
const Arrow = memo(() => (
  <svg
    className="pf-link-arr"
    viewBox="0 0 10 10"
    fill="none"
    aria-hidden="true"
    width="8"
    height="8"
  >
    <path
      d="M2 8L8 2M8 2H4M8 2v4"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

/* ── Tagline animation hook — fires on scroll into view ─────────────────── */
function useTaglineAnim(taglineRef, underRef) {
  const timerIds = useRef([]);

  useEffect(() => {
    const ids  = timerIds.current;
    const root = taglineRef.current;
    if (!root) return;

    function runAnimation() {
      const words = root.querySelectorAll('.pf-tagline-word');
      const emEl  = root.querySelector('.pf-tagline-em');
      const under = underRef.current;

      const schedule = (fn, ms) => { const id = setTimeout(fn, ms); ids.push(id); };

      /* double-rAF: guarantee styles commit before transitions fire */
      const r1 = requestAnimationFrame(() => {
        const r2 = requestAnimationFrame(() => {

          words.forEach((w, i) => {
            schedule(() => {
              w.style.transition = `transform 0.7s ${EASE}, opacity 0.6s ease`;
              w.style.opacity    = '1';
              w.style.transform  = 'translateY(0)';
            }, BASE_DELAY + i * STAGGER);
          });

          const emDelay = BASE_DELAY + words.length * STAGGER;

          schedule(() => {
            if (!emEl) return;
            emEl.style.transition = `transform 0.7s ${EASE}, opacity 0.6s ease`;
            emEl.style.opacity    = '1';
            emEl.style.transform  = 'translateY(0)';
          }, emDelay);

          schedule(() => {
            under?.classList.add('pf-tagline-under--drawn');
          }, emDelay + 120);
        });
        ids.push(r2);
      });
      ids.push(r1);
    }

    /* Fire once when ≥20% of the footer enters the viewport */
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();   // run once only
        runAnimation();
      },
      { threshold: 0.2 }
    );

    observer.observe(root);

    return () => {
      observer.disconnect();
      ids.forEach(id => id < 1e6 ? cancelAnimationFrame(id) : clearTimeout(id));
    };
  }, [taglineRef, underRef]);
}

/* ── Footer ───────────────────────────────────────────────────────────────── */
function Footer() {
  const navigate    = useNavigate();
  const year        = new Date().getFullYear();
  const taglineRef  = useRef(null);
  const underRef    = useRef(null);

  useTaglineAnim(taglineRef, underRef);

  return (
    <footer className="pf" aria-label="Site footer">

      {/* Chroma top bar — pure CSS */}
      <div className="pf-chroma" aria-hidden="true" />

      {/* Body */}
      <div className="pf-body">

        {/* Left */}
        <div className="pf-left">

          {/* Wordmark */}
          <Link to="/" className="pf-mark" aria-label="Alejandro Armas — Home">
            <div className="pf-mark-box" aria-hidden="true">
              <span>AA</span>
            </div>
            <span className="pf-mark-name">Alejandro Armas</span>
          </Link>

          {/* Animated tagline */}
          <p
            className="pf-tagline"
            ref={taglineRef}
            aria-label="Building things that matter"
          >
            {TAGLINE.map((line, li) => (
              <span key={li} className="pf-tagline-line">
                {line.map((word, wi) => {
                  const isFirst = wi === 0;

                  if (word?.em) {
                    return (
                      <React.Fragment key="em">
                        {!isFirst && <span className="pf-tagline-gap" aria-hidden="true" />}
                        <span className="pf-tagline-em-wrap">
                          <span className="pf-tagline-em">{word.text}</span>
                          <span ref={underRef} className="pf-tagline-under" aria-hidden="true" />
                        </span>
                      </React.Fragment>
                    );
                  }

                  return (
                    <React.Fragment key={wi}>
                      {!isFirst && <span className="pf-tagline-gap" aria-hidden="true" />}
                      <span className="pf-tagline-word">{word}</span>
                    </React.Fragment>
                  );
                })}
              </span>
            ))}
          </p>

          {/* Availability */}
          <div className="pf-status" aria-label="Currently open to offers">
            <span className="pf-dot" aria-hidden="true" />
            <span className="pf-avail">Open to offers</span>
          </div>

        </div>

        {/* Right — nav + social columns */}
        <div className="pf-cols">

          <div className="pf-col">
            <span className="pf-col-label">Navigation</span>
            <ul className="pf-links">
              {NAV_LINKS.map(({ label, to, color }) => (
                <li key={to}>
                  <button
                    className={`pf-link pf-link--${color}`}
                    onClick={() => navigate(to)}
                    aria-label={label}
                  >
                    {label}
                    <Arrow />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="pf-col">
            <span className="pf-col-label">Connect</span>
            <ul className="pf-links">
              {SOCIAL_LINKS.map(({ label, href, color }) => (
                <li key={label}>
                  <a
                    className={`pf-link pf-link--${color}`}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    aria-label={label}
                  >
                    {label}
                    <Arrow />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="pf-bar">
        <span className="pf-copy">© {year} · All rights reserved</span>
        <span className="pf-made">
          Designed &amp; built by <em>Alejandro Armas</em>
        </span>
      </div>

    </footer>
  );
}

export default memo(Footer);
