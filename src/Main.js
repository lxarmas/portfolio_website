// src/Main.js
import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';


import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import Portfolio from './Portfolio';
import About from './About';
import Signup from './Signup';

// Initial booking times
const initializeTimes = () => [
  '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
];

// Reducer function to handle booking times update
const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE':
      return initializeTimes();
    default:
      return state;
  }
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const { isDarkMode } = useTheme(); // Using context hook

  return (
    <main
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
 

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio_website" element={<HomePage />} />
        <Route
          path="/booking"
          element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/menu" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </main>
  );
}

export default Main;
