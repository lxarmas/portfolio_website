import "./HomePage.css";
import React from "react";
import { useTheme } from "./context/ThemeContext"; // Import the custom hook
import Header from "./Header";
import PortfolioShowcase from "./PortfolioShowcase";
// import CustomerSay from "./CustomerSay";
import PersonalStory from "./PersonalStory";


function HomePage() {
  const { isDarkMode } = useTheme(); // Get dark mode state from context

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className={isDarkMode ? "dark-mode" : ""}>
      <div className="homepage-container">
        <Header />
        <PortfolioShowcase />
        <PersonalStory />
      </div>
      <button className="scroll-to-top" onClick={scrollToTop}>
       
       
      </button>
    </main>
  );
}

export default HomePage;
 