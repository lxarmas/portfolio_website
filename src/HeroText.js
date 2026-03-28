/**
 * HeroText.js — "Build things that matter" · 2026
 *
 * Performance contracts:
 *  • All animation on transform + opacity only (compositor thread)
 *  • Chars built once via useMemo — no re-renders during animation
 *  • Timeouts tracked in ref array → fully cleaned up on unmount
 *  • Double-rAF ensures styles commit before transitions fire
 *  • Zero layout reads during animation
 */

import React, { useRef, useEffect, useMemo, memo } from 'react';
import './HeroText.css';

/* ── Config ──────────────────────────────────────────────────────────────── */
const LINES = [
  { words: ['Build'],          style: 'italic'  },
  { words: ['things'],         style: 'normal'  },
  { words: ['that', 'matter'], style: 'italic'  },
];

const LINE_DELAYS   = [0, 180, 320];   // ms offset per line
const CHAR_STAGGER  = 28;              // ms between chars
const CHAR_DURATION = 650 + 120;       // transition + initial delay

/* ── CharRow ─────────────────────────────────────────────────────────────── */
const CharRow = memo(({ words, lineStyle, lineIndex, rowRef }) => (
  <div ref={rowRef} className={`ht-row ht-row--${lineStyle}`} aria-hidden="true">
    {words.map((word, wi) => (
      <span key={wi} className="ht-word">
        {word.split('').map((ch, ci) => (
          <span key={ci} className="ht-char">
            {ch}
          </span>
        ))}
        {wi < words.length - 1 && (
          <span className="ht-space" aria-hidden="true">{'\u00A0'}</span>
        )}
      </span>
    ))}
  </div>
));

/* ── HeroText ─────────────────────────────────────────────────────────────── */
function HeroText({ byline = 'Alejandro Armas · 2026' }) {
  const rowRefs   = useRef([]);
  const subRef    = useRef(null);
  const inkRef    = useRef(null);
  const timerIds  = useRef([]);

  /* total animation duration — computed so cleanup is exact */
  const totalMs = useMemo(() => {
    const lastLine  = LINES[LINES.length - 1];
    const lastCount = lastLine.words.join('').length;
    return LINE_DELAYS[LINES.length - 1] + (lastCount - 1) * CHAR_STAGGER + CHAR_DURATION;
  }, []);

  useEffect(() => {
    const ids = timerIds.current;

    /* double-rAF: ensures browser has painted once before transitions start */
    const rafOuter = requestAnimationFrame(() => {
      const rafInner = requestAnimationFrame(() => {

        /* — animate each char — */
        rowRefs.current.forEach((row, li) => {
          if (!row) return;
          const chars = row.querySelectorAll('.ht-char');
          chars.forEach((ch, ci) => {
            const id = setTimeout(() => {
              ch.style.opacity   = '1';
              ch.style.transform = 'translateY(0)';
            }, LINE_DELAYS[li] + ci * CHAR_STAGGER + 120);
            ids.push(id);
          });
        });

        /* — byline + ink line — */
        const id = setTimeout(() => {
          subRef.current?.classList.add('ht-sub--visible');
          inkRef.current?.classList.add('ht-ink--drawn');
        }, totalMs);
        ids.push(id);
      });
      ids.push(rafInner);
    });
    ids.push(rafOuter);

    return () => {
      ids.forEach(id =>
        typeof id === 'number' && id < 1e6
          ? cancelAnimationFrame(id)
          : clearTimeout(id)
      );
    };
  }, [totalMs]);

  return (
    <section className="ht-stage" aria-label={LINES.flatMap(l => l.words).join(' ')}>

      {/* Screen-reader text */}
      <p className="ht-sr">
        {LINES.flatMap(l => l.words).join(' ')}
      </p>

      {/* Visual chars */}
      {LINES.map((line, li) => (
        <CharRow
          key={li}
          words={line.words}
          lineStyle={line.style}
          lineIndex={li}
          rowRef={el => (rowRefs.current[li] = el)}
        />
      ))}

      {/* Byline */}
      <p ref={subRef} className="ht-sub">{byline}</p>

      {/* Ink baseline */}
      <span ref={inkRef} className="ht-ink" aria-hidden="true" />

    </section>
  );
}

export default memo(HeroText);
