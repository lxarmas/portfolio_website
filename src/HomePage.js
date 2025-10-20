import "./HomePage.css";
import React from "react";
import { useTheme } from "./context/ThemeContext"; // Import the custom hook
import Header from "./Header";
import PortfolioShowcase from "./PortfolioShowcase";
import CustomerSays from "./Customersay";
import PersonalStory from "./PersonalStory";
import { FaArrowUp } from "react-icons/fa";

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
        <CustomerSays />
        <PersonalStory />
      </div>
      <button className="scroll-to-top" onClick={scrollToTop}>
        <FaArrowUp />
        <p>Back to top</p>
      </button>
    </main>
  );
}

export default HomePage;
