import React, { useState } from "react";
import profile1 from "./images/OwnerProfile1.JPG";
import profile2 from "./images/OwnerProfile2.png"
import profile3 from "./images/OwnerProfile3.jpg";

function About() {
    const [currentImage, setCurrentImage] = useState( 0 );
    const images = [profile1, profile2, profile3];

    const handleNext = () => {
        setCurrentImage( ( prev ) => ( prev + 1 ) % images.length );
    };

    return (
        <div className="about p-8 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>
            <h2 className="text-3xl font-semibold mb-4 text-center">Welcome to My Developer Journey!</h2>
            <p className="text-lg mb-6 text-center">
                Hi, I'm Alex, a passionate experienced professional photographer turned software engineer with a focus on building modern, user-friendly applications.
                I enjoy working with a variety of technologies, from front-end frameworks like React to back-end solutions using Node.js and PostgreSQL.
            </p>

            <div className="relative mb-6 flex justify-center">
                <img
                    src={images[currentImage]}
                    alt="Profile"
                    className="w-64 h-64 sm:w-72 sm:h-72 rounded-md shadow-lg object-contain"
                />
                <div className="absolute bottom-0 w-auto flex justify-left bg-gray-700 text-white px-6 py-2 mt-4">
                    <button
                        onClick={handleNext}
                        className="w-1/1 px-6 py-2 text-base bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none"
                    >
                        Next
                    </button>
                </div>
            </div>

            <h2 className="text-3xl font-semibold mb-4 text-center">My Story</h2>
            <p className="text-lg mb-6 text-center">
                My journey in software development began with a curiosity about how things work behind the scenes in tech.
                Over time, I honed my skills in front-end and back-end technologies, building projects that range from small apps to large-scale platforms.
                I thrive on solving problems and creating intuitive user experiences.
            </p>

            <h2 className="text-3xl font-semibold mb-4 text-center">Let's Connect</h2>
            <p className="text-lg mb-6 text-center">
                Whether you're looking for a developer to collaborate on a project or just want to chat about technology, feel free to reach out!
                I love learning, experimenting with new tech, and sharing knowledge with fellow developers.
                Let’s build something amazing together!
            </p>
        </div>
    );
}

export default About;
