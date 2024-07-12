import React, { useState } from "react";
import owner1 from "./images/Owners.jpg";
import owner2 from "./images/main.jpg";

function About() {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [owner1, owner2];

    const handleNext = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };



    return (
        <div className="about p-8 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
            <h2 className="text-3xl font-semibold mb-4 text-center">Welcome to Little Lemon!</h2>
            <p className="text-lg mb-6 text-center">At Little Lemon, we bring the vibrant flavors of the Mediterranean to your table. Located in the heart of Chicago, our restaurant is a culinary haven where traditional Mediterranean dishes are crafted with love and served with a modern twist.</p>

            <div className="relative mb-6">
                <img src={images[currentImage]} alt="Owner" className="w-full md:w-68rounded-md shadow-lg" />
                <div className="absolute bottom-0 w-full flex justify-between bg-gray-700 text-white px-2 py-1">
                    {/* <button onClick={handlePrev} className="rounded-l-lg">Prev</button> */}
                    <button onClick={handleNext} className="rounded-r-lg">Next</button>
                </div>
            </div>

            <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
            <p className="text-lg mb-6">Welcome to Little Lemon, a charming restaurant nestled in the heart of Chicago. At Little Lemon, <br />
                    we pride ourselves on offering a delightful dining experience that combines fresh, locally sourced ingredients with the rich culinary traditions of the Mediterranean.  <br />
                 </p>

            <h2 className="text-3xl font-semibold mb-4">Join Us</h2>
            <p className="text-lg mb-6">Whether you're a longtime fan of Mediterranean cuisine or a newcomer eager to explore new flavors, Little Lemon invites you to savor the taste of the Mediterranean. Come join us and experience the warmth, richness, and diversity of our culinary tradition.</p>
        </div>
    );
}

export default About;
