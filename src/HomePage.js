import React from "react";
import Calltoaction from "./CalltoAction";
import Specials from "./Specials";
import CustomerSays from "./Customersay";
import Chicago from "./Chicago";
import Footer from "./Footer";
import { FaArrowUp } from 'react-icons/fa';

function HomePage(){

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
      };

    return(
    <main>
        <Calltoaction /><br></br><br></br>
        <Specials /><br></br><br></br>
        <CustomerSays /><br></br><br></br>
        <Chicago /><br></br><br></br>
        <Footer /><br></br>
        <button className="scroll-to-top" onClick={scrollToTop}><h7>Back to top</h7>
          <FaArrowUp />
      </button>
    </main>)
}

export default HomePage;