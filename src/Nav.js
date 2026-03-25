import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import logo from './images/logo.png'; // ← uncomment when ready
import './Nav.css';

const LINKS = [
  { label: 'Home',         to: '/'        },
  { label: 'Projects',     to: '/menu'    },
  { label: 'About',        to: '/about'   },
  { label: 'Appointments', to: '/booking' },
];

function Nav() {
  const location                  = useLocation();
  const navRef                    = useRef(null);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [menuOpen]);

  const cls = ['pn', scrolled && 'pn--scrolled', menuOpen && 'pn--open']
    .filter(Boolean).join(' ');

  return (
    <nav ref={navRef} className={cls} aria-label="Main navigation">
      <div className="pn-inner">

        {/* LEFT — logo */}
        <Link to="/" className="pn-logo" aria-label="Alejandro Armas — Home"
              onClick={() => setMenuOpen(false)}>
          {/*
            Swap the placeholder below with your real logo:
            <img src={logo} alt="Alejandro Armas" />
          */}
          <div className="pn-logo-img" aria-hidden="true">
            <span>AA</span>
          </div>
          <span className="pn-logo-name">Alejandro Armas</span>
        </Link>

        {/* CENTER — desktop nav links */}
        <ul className="pn-links">
          {LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                className={`pn-link${location.pathname === to ? ' pn-link--active' : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT — status pill + CTA */}
        <div className="pn-right">
          <div className="pn-status" aria-hidden="true">
            <span className="pn-dot" />
            Open to offers
          </div>
          <Link to="/booking" className="pn-cta">Hire Me</Link>
        </div>

        {/* Mobile toggle (only visible ≤768px) */}
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

      {/* Mobile drawer */}
      <div className="pn-drawer" aria-hidden={!menuOpen}>
        <ul className="pn-drawer-list" role="list">
          {LINKS.map(({ label, to }, i) => (
            <li key={to} style={{ '--i': i }}>
              <Link
                to={to}
                className={`pn-drawer-link${location.pathname === to ? ' active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li style={{ '--i': LINKS.length }}>
            <Link
              to="/booking"
              className="pn-drawer-link pn-drawer-link--cta"
              onClick={() => setMenuOpen(false)}
            >
              Hire Me →
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
