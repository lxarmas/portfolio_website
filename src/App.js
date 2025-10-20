import React from "react";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import "./App.css";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      aria-label="Toggle dark mode"
      title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="theme-toggle-button"
      onClick={toggleTheme}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = isDarkMode ? "#333" : "#ddd";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = isDarkMode ? "#222" : "#f0f0f0";
      }}
    >
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Nav/>
        <Main />
        <Footer />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
};

export default App