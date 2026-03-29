import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { useTheme } from "./context/ThemeContext";
import Header from "./Header";
import PortfolioShowcase from "./PortfolioShowcase";
import PersonalStory from "./PersonalStory";

function HomePage() {
  const { isDarkMode } = useTheme();
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBtn(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <main className={`hp-main${isDarkMode ? ' dark-mode' : ''}`}>
      <div className="homepage-container">
        <Header />
        <PortfolioShowcase />
        <PersonalStory />
      </div>
      <button
        className={`hp-scroll-top${showBtn ? ' hp-scroll-top--visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 11V3M3 6l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </main>
  );
}

export default HomePage;