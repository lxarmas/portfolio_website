import React, { useState } from "react"; // Add useState here
import Header from "./Header";
import PortfolioShowcase from "./PortfolioShowcase";
import CustomerSays from "./Customersay";
import Chicago from "./Chicago";
import { FaArrowUp } from 'react-icons/fa';
import './style.css'

function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState( false ); // Now useState will work

  const scrollToTop = () => {
    window.scrollTo( {
      top: 0,
      behavior: 'smooth',
    } );
  };

  return (
    <main>
      <Header isDarkMode={isDarkMode} /><br /><br />
      <PortfolioShowcase isDarkMode={isDarkMode} /><br /><br />
      <CustomerSays isDarkMode={isDarkMode} /><br /><br />
      <Chicago isDarkMode={isDarkMode} /><br /><br />

      {/* Scroll to Top Button */}
      <button className="scroll-to-top" onClick={scrollToTop}>
        <p>Back to top</p>
        <FaArrowUp />
      </button>
    </main>
  );
}

export default HomePage;
