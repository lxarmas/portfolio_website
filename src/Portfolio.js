import React from "react";
import worthyreads from "./images/worthyreads_image.png";
import ninjagame from "./images/ninjagame.png";
import sportsSupply from "./images/sportsSupply.png";

function Portfolio() {
  const projects = [
    {
      title: "WorthyReads",
      image: worthyreads,
      description: "Created a full-stack book club app within secure JWT auhtentication and Google API integration",
      links: {
        demo: "",
        code: "https://github.com/lxarmas/worthy_reads",
      },
    },
    {
      title: "Ninja Odyssey",
      image: ninjagame,
      description: "Completed  two player game with custom collision detection, reducing rendering lag by 15%.",
      links: {
        demo: "https://lxarmas.github.io/Ninja_Odyssey/",
        code: "https://github.com/lxarmas/Ninja_Odyssey",
      },
    },
    {
      title: "Fitness Rack",
      image: sportsSupply,
      description: "Developed an e-commerce site with optimized state management, boosting conversion rate by 40%",
      links: {
        demo: "https://taskmanager.example.com",
        code: "https://github.com/lxarmas/graceshopper",
      },
    },
  ];

  return (
    <section className="py-8 px-4 ">
      <h2 className="text-4xl font-bold text-center mb-6 text-black" id="projects">
        Projects
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
              <h4 className="text-xl font-semibold text-[#0f0f0f]">{project.title}</h4>
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
                  Demo
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
