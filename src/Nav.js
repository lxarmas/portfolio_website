/**
 * Nav.js — Continuous Minimal · 2026
 *
 * Performance contracts:
 *  • Scroll listener → requestAnimationFrame-gated, passive, single RAF id
 *  • Active-line → reads getBoundingClientRect once per hover/route change,
 *    writes only CSS custom properties (no layout-triggering style changes)
 *  • Magnetic CTA → transform only (compositor thread), cancelled on leave
 *  • All transitions: transform + opacity exclusively (no width/top/left)
 *  • useRef over useState for ephemeral DOM state (no re-renders on hover)
 */

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  memo,
} from 'react';
import { Link, useLocation } from 'react-router-dom';
// import logo from './images/logo.png';
import './Nav.css';
import "./HeroText.js"
import "./HeroText.css"

/* ── Config ──────────────────────────────────────────────────────────────── */
const LINKS = [
  { label: 'Home',         to: '/'        },
  { label: 'Projects',     to: '/menu'    },
  { label: 'About',        to: '/about'   },
  { label: 'Appointments', to: '/booking' },
];

const SCROLL_THRESHOLD = 20;

/* ── Magnetic CTA hook ───────────────────────────────────────────────────── */
function useMagnetic(strength = 0.32) {
  const ref    = useRef(null);
  const rafId  = useRef(null);

  const onMove = useCallback((e) => {
    cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      const el   = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const dx   = e.clientX - (rect.left + rect.width  / 2);
      const dy   = e.clientY - (rect.top  + rect.height / 2);
      el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
    });
  }, [strength]);

  const onLeave = useCallback(() => {
    cancelAnimationFrame(rafId.current);
    if (ref.current) ref.current.style.transform = '';
  }, []);

  return { ref, onMouseMove: onMove, onMouseLeave: onLeave };
}

/* ── Sliding ink-line hook ───────────────────────────────────────────────── */
function useInkLine(linksRef, location) {
  const lineRef = useRef(null);

  const moveTo = useCallback((linkEl) => {
    const line      = lineRef.current;
    const container = linksRef.current;
    if (!line || !container || !linkEl) return;

    // single read batch
    const cRect = container.getBoundingClientRect();
    const lRect = linkEl.getBoundingClientRect();

    const x = lRect.left - cRect.left;
    const w = lRect.width;

    // write only custom props → no layout recalc
    line.style.setProperty('--line-x', `${x}px`);
    line.style.setProperty('--line-w', `${w}px`);
  }, [linksRef]);

  // follow active route
  useEffect(() => {
    const container = linksRef.current;
    if (!container) return;
    const activeEl = container.querySelector('.pn-link--active');
    if (activeEl) moveTo(activeEl);
  }, [location.pathname, moveTo, linksRef]);

  // reset to active on mouse leave
  const onListLeave = useCallback(() => {
    const container = linksRef.current;
    if (!container) return;
    const activeEl = container.querySelector('.pn-link--active');
    if (activeEl) moveTo(activeEl);
  }, [moveTo, linksRef]);

  return { lineRef, moveTo, onListLeave };
}

/* ── Nav ─────────────────────────────────────────────────────────────────── */
function Nav() {
  const location              = useLocation();
  const navRef                = useRef(null);
  const linksRef              = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const magnetic                = useMagnetic(0.28);
  const { lineRef, moveTo, onListLeave } = useInkLine(linksRef, location);

  /* — close drawer on route change — */
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  /* — RAF-gated scroll listener — */
  useEffect(() => {
    let rafId = null;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() =>
        setScrolled(window.scrollY > SCROLL_THRESHOLD)
      );
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  /* — outside-click to close drawer — */
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target))
        setMenuOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [menuOpen]);

  /* — CSS class string — */
  const cls = [
    'pn',
    scrolled  && 'pn--scrolled',
    menuOpen  && 'pn--open',
  ].filter(Boolean).join(' ');

  return (
    <nav ref={navRef} className={cls} aria-label="Main navigation">
      <div className="pn-inner">

        {/* ── Logo ── */}
        <Link
          to="/"
          className="pn-logo"
          aria-label="Alejandro Armas — Home"
          onClick={() => setMenuOpen(false)}
        >
          {/* swap for: <img src={logo} alt="Alejandro Armas" /> */}
          <div className="pn-logo-mark" aria-hidden="true">
            <span>AA</span>
          </div>
          <span className="pn-logo-name">Alejandro Armas</span>
        </Link>

        {/* ── Desktop links ── */}
        <ul
          ref={linksRef}
          className="pn-links"
          onMouseLeave={onListLeave}
        >
          {/* sliding ink line — one DOM node, moved via CSS vars */}
          <span ref={lineRef} className="pn-line" aria-hidden="true" />

          {LINKS.map(({ label, to }) => {
            const isActive = location.pathname === to;
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={`pn-link${isActive ? ' pn-link--active' : ''}`}
                  onMouseEnter={(e) => moveTo(e.currentTarget)}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ── Right: status + CTA ── */}
        <div className="pn-right">
          <div className="pn-status" aria-hidden="true">
            <span className="pn-dot" />
            Open to offers
          </div>

          <Link
            to="/booking"
            className="pn-cta"
            ref={magnetic.ref}
            onMouseMove={magnetic.onMouseMove}
            onMouseLeave={magnetic.onMouseLeave}
          >
            Hire Me
          </Link>
        </div>

        {/* ── Mobile toggle ── */}
        <button
          className="pn-toggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className="pn-bar" />
          <span className="pn-bar" />
        </button>

      </div>

      {/* ── Mobile drawer ── */}
      <div className="pn-drawer" aria-hidden={!menuOpen}>
        <ul className="pn-drawer-list">
          {LINKS.map(({ label, to }, i) => (
            <li key={to} style={{ '--i': i }}>
              <Link
                to={to}
                className={`pn-drawer-link${location.pathname === to ? ' active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
                <span className="pn-drawer-arrow" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
          <li style={{ '--i': LINKS.length }}>
            <Link
              to="/booking"
              className="pn-drawer-link pn-drawer-link--cta"
              onClick={() => setMenuOpen(false)}
            >
              Hire Me
              <span className="pn-drawer-arrow" aria-hidden="true">→</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

/* memo: re-render only when location changes (handled internally) */
export default memo(Nav);
