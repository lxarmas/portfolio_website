import React from "react";
import logo from "./images/alex_logo.png";

function CustomerSays() {
    return (
        <div className="bg-grey-500 py-12 dark:bg-black">
            <section className="max-w-7xl mx-auto text-center text-black dark:text-white">
                <h2 className="text-5xl font-extrabold mb-10 text-black dark:text-white">What Clients Say About My Work</h2>

                <div className="flex flex-col md:grid md:grid-cols-3 gap-10">
                    {/* Testimonial 1 */}
                    <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-xl shadow-xl hover:scale-105 transition-all duration-300 ease-in-out transform">
                        <div className="flex items-center justify-center mb-4">
                            <img
                                src={logo}
                                alt="5-star rating"
                                className="w-24 h-24 object-contain"
                            />
                        </div>
                        <h5 className="text-2xl font-semibold mb-4 dark:text-white">"Exceptional Code Quality and Efficiency!"</h5>
                        <p className="dark:text-white">
                            "Alejandro's coding skills are second to none. He consistently delivers clean, efficient, and maintainable code. His attention to detail ensures every project meets high standards."
                        </p>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-xl shadow-xl hover:scale-105 transition-all duration-300 ease-in-out transform">
                        <div className="flex items-center justify-center mb-4">
                            <img
                                src={logo}
                                alt="5-star rating"
                                className="w-24 h-24 object-contain"
                            />
                        </div>
                        <h5 className="text-2xl font-semibold mb-4 dark:text-white">"Incredible Problem-Solving and Debugging Skills!"</h5>
                        <p className="dark:text-white">
                            "No challenge is too big for Alejandro. His approach to debugging and problem-solving is methodical, ensuring that even the toughest bugs are quickly resolved. He brings a calm confidence to every project."
                        </p>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-xl shadow-xl hover:scale-105 transition-all duration-300 ease-in-out transform">
                        <div className="flex items-center justify-center mb-4">
                            <img
                                src={logo}
                                alt="5-star rating"
                                className="w-24 h-24 object-contain"
                            />
                        </div>
                        <h5 className="text-2xl font-semibold mb-4 dark:text-white">"Highly Recommend for Full-Stack Projects!"</h5>
                        <p className="dark:text-white">
                            "Alejandro is a go-to developer for full-stack projects. His expertise in both front-end and back-end development, along with his seamless integrations, make him an invaluable asset to any project."
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CustomerSays;
