import React, { useState } from "react";
import profile1 from "./images/OwnerProfile1.JPG"; // Change this to your profile image
// import profile2 from "./images/OwnerProfile2.jpg"; // Change this to another image if needed

function About() {
    const [currentImage, setCurrentImage] = useState( 0 );
    const images = [profile1,];

    const handleNext = () => {
        setCurrentImage( ( prev ) => ( prev + 1 ) % images.length );
    };

    return (
        <div className="about p-8 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>
            <h2 className="text-3xl font-semibold mb-4 text-center">Welcome to My Developer Journey!</h2>
            <p className="text-lg mb-6 text-center">
                Hi, I'm Alex, a passionate experinced professional photographer turn into software Engineer with a focus on building modern, user-friendly applications.
                I enjoy working with a variety of technologies, from front-end frameworks like React to back-end solutions using Node.js and PostgreSQL.
            </p>

            <div className="relative mb-6">
                <img src={images[currentImage]} alt="Profile" className="w-full md:w-68 rounded-md shadow-lg" />
                <div className="absolute bottom-0 w-full flex justify-between bg-gray-700 text-white px-2 py-1">
                    <button onClick={handleNext} className="rounded-r-lg">Next</button>
                </div>
            </div>

            <h2 className="text-3xl font-semibold mb-4">My Story</h2>
            <p className="text-lg mb-6">
                My journey in software development began with a curiosity about how things work behind the scenes in tech.
                Over time, I honed my skills in front-end and back-end technologies, building projects that range from small apps to large-scale platforms.
                I thrive on solving problems and creating intuitive user experiences.
            </p>

            <h2 className="text-3xl font-semibold mb-4">Let's Connect</h2>
            <p className="text-lg mb-6">
                Whether you're looking for a developer to collaborate on a project or just want to chat about technology, feel free to reach out!
                I love learning, experimenting with new tech, and sharing knowledge with fellow developers.
                Let’s build something amazing together!
            </p>
        </div>
    );
}

export default About;
