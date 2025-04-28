import "./HomePage.css"

import React from "react";
import Header from "./Header";
import PortfolioShowcase from "./PortfolioShowcase";
import CustomerSays from "./Customersay";
import PersonalStory from "./PersonalStory";
import { FaArrowUp } from "react-icons/fa";

function HomePage( { isDarkMode } ) {
  const scrollToTop = () => {
    window.scrollTo( {
      top: 0,
      behavior: "smooth",
    } );
  };

  return (
    <main className={isDarkMode ? "dark-mode" : ""}>
      <div className="homepage-container">
        <Header />
        <PortfolioShowcase className="mt-12" />
        <CustomerSays className="mt-12" />
        <PersonalStory className="mt-12" />
      </div>

      {/* Scroll to Top Button */}
      <button className="scroll-to-top" onClick={scrollToTop}>
        <FaArrowUp />
        <p>Back to top</p>
      </button>
    </main>
  );
}

export default HomePage;
