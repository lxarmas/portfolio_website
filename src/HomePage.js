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
      {/*  */}
      <Header />
      {/* MY skills and expertise */}
      <PortfolioShowcase className="mt-12" />
      {/* clients say about my work */}
      <CustomerSays className="mt-12" />
      {/* why I am here */}
      <PersonalStory className="mt-12" />

      {/* Scroll to Top Button */}
      <button className="scroll-to-top" onClick={scrollToTop}>
        <FaArrowUp />
        <p>Back to top</p>
      </button>
    </main>
  );
}

export default HomePage;
