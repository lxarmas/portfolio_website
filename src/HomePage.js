import Header from "./Header";
import PortfolioShowcase from "./PortfolioShowcase";
import CustomerSays from "./Customersay";
import Chicago from "./Chicago";
import { FaArrowUp } from "react-icons/fa";

function HomePage( { isDarkMode } ) {
  const scrollToTop = () => {
    window.scrollTo( {
      top: 0,
      behavior: "smooth",
    } );
  };

  return (
    <main className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <Header /><br /><br />
      {/* MY skills and expertise */}
      <PortfolioShowcase /><br /><br />
      {/* clients say about my work */}
      <CustomerSays /><br /><br />
      {/* why I am here */}
      <Chicago /><br /><br />

      {/* Scroll to Top Button */}
      <button className="scroll-to-top" onClick={scrollToTop}>
        <FaArrowUp />
        <p>Back to top</p>
      </button>


    </main>
  );
}

export default HomePage;
