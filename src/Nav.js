import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import Logo from './Logo';
import './Nav.css';

const LINKS = [
  { label: 'Home',         to: '/'        },
  { label: 'Projects',     to: '/menu'    },
  { label: 'About',        to: '/about'   },
  { label: 'Appointments', to: '/booking' },
];

function Nav() {
  const { isDarkMode } = useTheme();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  // Collapse mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  // Add border + slight bg on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [menuOpen]);

  return (
    <nav
      ref={navRef}
      className={[
        'pn',
        scrolled  ? 'pn--scrolled'  : '',
        menuOpen  ? 'pn--open'      : '',
      ].filter(Boolean).join(' ')}
      aria-label="Main navigation"
    >
      <div className="pn-inner">

        {/* Logo */}
        <Link to="/" className="pn-logo" aria-label="Home" onClick={() => setMenuOpen(false)}>
          <Logo />
        </Link>

        {/* Desktop links */}
        <ul className="pn-links" role="list">
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

        {/* Mobile toggle */}
        <button
          className="pn-toggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className="pn-toggle-bar" />
          <span className="pn-toggle-bar" />
        </button>

      </div>

      {/* Mobile drawer */}
      <div className="pn-drawer" aria-hidden={!menuOpen}>
        <ul className="pn-drawer-links" role="list">
          {LINKS.map(({ label, to }, i) => (
            <li key={to} style={{ '--i': i }}>
              <Link
                to={to}
                className={`pn-drawer-link${location.pathname === to ? ' pn-link--active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
