import React from "react";
import { useNavigate } from "react-router-dom";
import jobs_cover from "./images/jobs_cover.avif";
import './Header.css';

function Header() {
  const navigate = useNavigate();

  const Submit = () => {
    navigate( "/menu" );
  };

  return (
    <header className="header bg-[#4e6151] text-white">
      <section className="flex items-center justify-between py-12 px-6 sm:px-12 lg:px-24">
        <div className="banner text-center sm:text-left max-w-lg">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-100 text-center mb-6">
            <span className="text-[#e3c517]">Experience</span>
          </h2>

          <p className="text-lg sm:text-xl leading-loose max-w-2xl mx-auto text-gray-200">
            <span className="text-[#ffd700] font-semibold">Versatile Full Stack Engineer</span> with expertise in
            <span className="text-[#ffd700] font-medium"> React, Node.js, PostgreSQL,</span> and <span className="text-[#ffd700] font-medium">AWS</span>.
            Led <span className="italic">AI-driven fashion apps</span>, optimized cloud deployments, and built
            high-impact e-commerce platforms.
            A <span className="font-bold text-[#ffd700]">hackathon winner</span>, enhancing <span className="text-[#ffd700]">user engagement, scalability,</span> and performance. 🚀
          </p>

          <button
            id="button1"
            onClick={Submit}
            className="bg-[#ffcc00] text-[#4e6151] px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-[#ffb900] transition duration-300"
          >
            My Projects
          </button>
        </div>
        <div className="banner-img">
          <img
            src={jobs_cover}
            alt="job cover"
            className="w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </section>
    </header>
  );
}

export default Header;
