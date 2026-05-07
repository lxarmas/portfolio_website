import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  memo,
} from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';
import './HeroText.js';
import './HeroText.css';

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/menu' },
  { label: 'About', to: '/about' },
  { label: 'Appointments', to: '/booking' },
];

const SCROLL_THRESHOLD = 20;

function useMagnetic(strength = 0.32) {
  const ref = useRef(null);
  const rafId = useRef(null);

  const onMove = useCallback((e) => {
    cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
    });
  }, [strength]);

  const onLeave = useCallback(() => {
    cancelAnimationFrame(rafId.current);
    if (ref.current) ref.current.style.transform = '';
  }, []);

  return { ref, onMouseMove: onMove, onMouseLeave: onLeave };
}

function Nav() {
  const location = useLocation();
  const navRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const magnetic = useMagnetic(0.28);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    let rafId = null;

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > SCROLL_THRESHOLD);
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

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

  const cls = [
    'pn',
    scrolled && 'pn--scrolled',
    menuOpen && 'pn--open',
  ].filter(Boolean).join(' ');

  return (
    <nav ref={navRef} className={cls} aria-label="Main navigation">
     <div className="pn-inner">
  <button
    type="button"
    className="pn-toggle"
    onClick={() => setMenuOpen((v) => !v)}
    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
    aria-expanded={menuOpen}
    aria-controls="pn-drawer"
  >
    <span className="pn-bar" />
    <span className="pn-bar" />
  </button>

  <Link
    to="/"
    className="pn-logo"
    aria-label="Alejandro Armas — Home"
    onClick={() => setMenuOpen(false)}
  >
    <div className="pn-logo-mark" aria-hidden="true">
      <span>AA</span>
    </div>
    <span className="pn-logo-name">ALEJANDRO ARMAS</span>
  </Link>

  <div className="pn-right">
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
</div>

      <div
        id="pn-drawer"
        className="pn-drawer"
        aria-hidden={!menuOpen}
      >
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

export default memo(Nav);