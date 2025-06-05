import React, { useState } from "react";
import profile4 from "./images/OwnerProfile1.JPG";
import profile1 from "./images/OwnerProfile2.png";
import profile2 from "./images/OwnerProfile3.jpg";
import profile3 from "./images/ale_headshot.png";
//                 <div className="text-center md:text-left">

function About() {
    const [currentImage, setCurrentImage] = useState( 0 );
    const images = [profile1, profile2, profile3, profile4];

    const handleNext = () => {
        setCurrentImage( ( prev ) => ( prev + 1 ) % images.length );
    };

    return (
        <main className="max-w-7xl mx-auto p-8 sm:p-12 md:p-16">
            <header className="mb-12 text-center">
                <h1 className="text-5xl font-extrabold bg-gradient-to-r from-sky-800 to-cyan-600 bg-clip-text text-transparent mb-2">
                    About Me
                </h1>
                <h2 className="text-3xl font-extrabold bg-gradient-to-r from-sky-800 to-cyan-600 bg-clip-text text-transparent mb-2">
                    Welcome to my development journey!
                </h2>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Profile Image & Next Button */}
                <div className="relative max-w-md mx-auto md:mx-0 rounded-xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-105">
                    <img
                        src={images[currentImage]}
                        alt={`Profile ${currentImage + 1}`}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                    />
                    <button
                        onClick={handleNext}
                        aria-label="Next profile image"
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#007FFF] hover:bg-[#339CFF] text-white font-semibold py-2 px-6 rounded-2xl shadow-lg active:scale-95 transition-all duration-200 ease-in-out"
                    >
                        Next
                    </button>

                </div>

                {/* Text Content */}
                <div className="space-y-8 text-gray-800 dark:text-gray-200">
                    <article className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
                        <p className="text-lg leading-relaxed">
                            Hi, I'm Alejandro, a passionate and experienced professional
                            photographer turned software engineer. I focus on building modern,
                            user-friendly applications with technologies ranging from React on
                            the front-end to Node.js and PostgreSQL on the back-end.
                        </p>
                    </article>

                    <article className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
                        <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-sky-800 to-cyan-600 bg-clip-text text-transparent">
                            My Story
                        </h3>
                        <p className="text-lg leading-relaxed">
                            My software development journey began with a curiosity about how
                            things work behind the scenes in tech. Over time, I honed skills
                            across the stack, building projects from small apps to large
                            platforms. I thrive on solving problems and crafting intuitive
                            user experiences.
                        </p>
                    </article>

                    <article className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
                        <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-sky-800 to-cyan-600 bg-clip-text text-transparent">
                            Let’s Connect
                        </h3>
                        <p className="text-lg leading-relaxed">
                            Whether you want to collaborate on a project or chat about
                            technology, feel free to reach out! I enjoy learning, experimenting
                            with new tech, and sharing knowledge with fellow developers. Let’s
                            build something amazing together!
                        </p>
                    </article>
                </div>
            </section>
        </main>
    );
}

export default About;
