import React, { useState, useEffect } from "react";
import Header from "./Header";
import Specials from "./PortfolioShowcase";
import CustomerSays from "./Customersay";
import Chicago from "./Chicago";
import { FaArrowUp } from 'react-icons/fa';

function HomePage() {
  // 🌙 Dark Mode State
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem( "darkMode" ) === "true"
  );

  // 🌙 Toggle Dark Mode
  const toggleDarkMode = () => {
    setIsDarkMode( prevMode => {
      const newMode = !prevMode;
      localStorage.setItem( "darkMode", newMode );
      return newMode;
    } );
  };

  // 🌙 Apply Dark Mode Class to Body
  useEffect( () => {
    document.body.className = isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900";
  }, [isDarkMode] );

  // 🔝 Smooth Scroll Function
  const scrollToTop = () => {
    window.scrollTo( {
      top: 0,
      behavior: 'smooth'
    } );
  };

  return (
    <>
      <main className={`portfolio-showcase flex flex-col items-center px-6 py-10 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
        <Header /><br></br><br></br>
        <Specials /><br></br><br></br>
        <CustomerSays /><br></br><br></br>
        <Chicago /><br></br><br></br>

        {/* 🔝 Scroll to Top Button */}
        <button className="scroll-to-top" onClick={scrollToTop}>
          <h7>Back to top</h7>
          <FaArrowUp />
        </button>
      </main>
    </>
  );
}

export default HomePage;
