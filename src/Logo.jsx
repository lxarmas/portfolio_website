import React from 'react';
import { useTheme } from './context/ThemeContext';


const Logo = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
      }}
    >
  
      <div>
        <h1
          style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            margin: 0,
            color: isDarkMode ? '#fff' : '#003366', // dark or blue text
            fontFamily: "'Arial Black', Arial, sans-serif",
          }}
        >
          ALEJANDRO ARMAS
        </h1>
        <p
          style={{
            fontSize: '1rem',
            margin: 0,
            color: isDarkMode ? '#00FFFF' : '#0099CC', // cyan accent in dark/light mode
            fontWeight: '500',
            fontFamily: "'Arial', sans-serif",
          }}
        >
          SOFTWARE ENGINEER
        </p>
      </div>
    </div>
  );
};

export default Logo;
