import React from "react";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";
import { ThemeProvider, useTheme } from "./context/ThemeContext";



const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Nav/>
        <Main />
        <Footer />
 
      </div>
    </ThemeProvider>
  );
};

export default App