import React, { useReducer, useState } from 'react';
import BookingPage from './BookingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import HomePage from './HomePage';
import ConfirmedBooking from './ConfirmedBooking';
import Portfolio from './Portfolio';
import About from './About';
import Login from './loginpage';
import Signup from './Signup';


const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

const updateTimes = ( state, action ) => {
  switch ( action.type ) {
    case 'UPDATE':
      return initializeTimes();
    default:
      return state;
  }
};

function Main() {
  const [availableTimes, dispatch] = useReducer( updateTimes, initializeTimes() );
  const [isDarkMode, setIsDarkMode] = useState( false );

  const toggleTheme = () => {
    setIsDarkMode( ( prevState ) => {
      const newMode = !prevState;
      document.body.classList.toggle( 'dark', newMode );
      return newMode;
    } );
  };


  return (
    <Router>
      <Nav isDarkMode={isDarkMode} />
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
          fontSize: '16px',
          transition: 'background-color 0.3s ease, transform 0.2s ease',
          position: 'fixed',
          right: '10px',
          bottom: '90%',
          transform: 'translateY(-50%)',
        }}
        onMouseEnter={( e ) => ( e.target.style.backgroundColor = '#555' )}
        onMouseLeave={( e ) => ( e.target.style.backgroundColor = '#333' )}
      >
        {isDarkMode ? '🌞' : '🌙'}
      </button>

      <Routes>
        <Route path="/" element={<HomePage isDarkMode={isDarkMode} />} />
        <Route path="/booking" element={<BookingPage isDarkMode={isDarkMode} availableTimes={availableTimes} dispatch={dispatch} />}
        />
        <Route path="/confirmed" element={<ConfirmedBooking isDarkMode={isDarkMode} />} />
        <Route path="/menu" element={<Portfolio isDarkMode={isDarkMode} />} />
        <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
        <Route path="/login" element={<Login isDarkMode={isDarkMode} />} />
        <Route path="/signup" element={<Signup isDarkMode={isDarkMode} />} />
      </Routes>

    </Router>
  );
}

export default Main;
