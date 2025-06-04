import React, { useReducer } from 'react';
import BookingPage from './BookingPage';

import Nav from './Nav';
import HomePage from './HomePage';
import ConfirmedBooking from './ConfirmedBooking';
import Portfolio from './Portfolio';
import About from './About';
import { Routes, Route } from 'react-router-dom';


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

function Main( { isDarkMode } ) {
  const [availableTimes, dispatch] = useReducer( updateTimes, initializeTimes() );

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>

      <Nav isDarkMode={isDarkMode} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio_website" element={<HomePage />} />

        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/menu" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

    </div>
  );
}

export default Main;
