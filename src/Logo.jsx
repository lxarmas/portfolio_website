import React from 'react';
import { useTheme } from './context/ThemeContext';

const Logo = () => {
  const { isDarkMode } = useTheme();

  const primary = isDarkMode ? '#F9FAFB' : '#0B1120';      // near-white / near-black
  const accent = isDarkMode ? '#38BDF8' : '#2563EB';       // cyan-ish blue
  const subtle = isDarkMode ? '#9CA3AF' : '#6B7280';       // muted gray
  const markBg = isDarkMode ? 'rgba(15,23,42,0.85)' : '#EEF2FF';
  const markBorder = isDarkMode ? '#38BDF820' : '#C7D2FE';

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.9rem',
      }}
    >
      {/* Monogram mark */}
      <div
        style={{
          width: '2.4rem',
          height: '2.4rem',
          borderRadius: '999px',
          background: markBg,
          border: `1px solid ${markBorder}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: isDarkMode
            ? '0 10px 30px rgba(15,23,42,0.75)'
            : '0 10px 30px rgba(15,23,42,0.10)',
        }}
      >
        <span
          style={{
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
            fontWeight: 700,
            fontSize: '1rem',
            letterSpacing: '0.08em',
            color: accent,
          }}
        >
          AA
        </span>
      </div>

      {/* Wordmark */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
        <h1
          style={{
            margin: 0,
            fontSize: '1.1rem',
            lineHeight: 1.1,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: primary,
            fontFamily:
              'system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", sans-serif',
            fontWeight: 300,
          }}
        >
          ALEJANDRO&nbsp;ARMAS
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: '0.8rem',
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: subtle,
            fontFamily:
              'system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", sans-serif',
            fontWeight: 500,
          }}
        >
          Software Engineer
        </p>
      </div>
    </div>
  );
};

export default Logo;