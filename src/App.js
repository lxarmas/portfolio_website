import React, { useState, useEffect } from 'react';
import Main from './Main';
import Footer from './Footer';
import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState( false );

  // Effect to add or remove dark class on the body element
  useEffect( () => {
    if ( isDarkMode ) {
      document.body.classList.add( 'dark' );
    } else {
      document.body.classList.remove( 'dark' );
    }
  }, [isDarkMode] );

  const toggleTheme = () => {
    setIsDarkMode( prevState => !prevState );
  };

  return (
    <div className="App">
      <Main isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
      <button
        onClick={toggleTheme}
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#333',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontSize: '20px',
          transition: 'background-color 0.3s ease, transform 0.2s ease',
          position: 'fixed',
          top: '40px',

          bottom: '80%',
          transform: 'translateY(-50%)',
        }}
        onMouseEnter={( e ) => ( e.target.style.backgroundColor = '#555' )}
        onMouseLeave={( e ) => ( e.target.style.backgroundColor = '#333' )}
      >
        {isDarkMode ? '🌞' : '🌙'}
      </button>
    </div>
  );
};

export default App;
