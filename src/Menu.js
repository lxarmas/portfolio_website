import React from "react";
import worthyreads from "./images/worthyreads_image.png";
import ninjagame from "./images/ninjagame.png";
import sportsSupply from "./images/sportsSupply.png";

function Portfolio() {
  const projects = [
    {
      title: "WorthyReads",
      image: worthyreads,
      description: "A book club app to explore, review, and save books. Built with React, Node.js, and PostgreSQL.",
      links: {
        demo: "",
        code: "https://github.com/lxarmas/worthy_reads",
      },
    },
    {
      title: "Ninja Odyssey",
      image: ninjagame,
      description: "A weather forecasting app using OpenWeather API. Built with React and Tailwind CSS.",
      links: {
        demo: "https://lxarmas.github.io/Ninja_Odyssey/",
        code: "https://github.com/lxarmas/Ninja_Odyssey",
      },
    },
    {
      title: "Fitness Rack",
      image: sportsSupply,
      description: "A task management app with drag-and-drop functionality. Built with React and Firebase.",
      links: {
        demo: "https://taskmanager.example.com",
        code: "https://github.com/lxarmas/graceshopper",
      },
    },
  ];

  return (
    <section className="py-8 px-4 bg-gray-200"> {/* Changed the background color here */}
      <h2 className="text-4xl font-bold text-center mb-6 text-red" id="projects">
        Projects hello
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map( ( project, index ) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-[#2a2dde]">{project.title}</h4>
              <p className="text-gray-700 text-sm mt-2">
                {project.description}
              </p>
              <div className="mt-4 flex gap-2">
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-[#ffcc00] px-4 py-2 rounded hover:bg-[#ffb900]"
                >
                  Demo fdgdfgdfgd
                </a>
                <a
                  href={project.links.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-green-900 px-4 py-2 rounded hover:bg-gren-900"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ) )}
      </div>
    </section>
  );
}

export default Portfolio;
