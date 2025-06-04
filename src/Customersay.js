import React from "react";
import { ReactComponent as Logo } from "./images/fivestar.svg";


function CustomerSays() {
    return (
        <div className="bg-grey-500 py-12 dark:bg-black">
            <section className="max-w-7xl mx-auto text-center text-black dark:text-white">
                <h2 className="text-5xl font-extrabold bg-gradient-to-r from-sky-800 to-cyan-600 bg-clip-text text-transparent mb-2">
                    What Clients Say About My Work
                </h2>

                <div className="flex flex-col md:grid md:grid-cols-3 gap-10">
                    {/* Testimonial 1 */}
                    <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-xl shadow-xl hover:scale-105 transition-all duration-300 ease-in-out transform">
                        <div className="flex items-center justify-center mb-4">
                            <Logo className="w-29 h-29 text-cyan-300 fill-current" />

                        </div>
                        <h5 className="text-2xl font-bold text-cyan-700 mb-3">"Exceptional Code Quality and Efficiency!"</h5>
                        <p className="dark:text-white">
                            "Alejandro's coding skills are second to none. He consistently delivers clean, efficient, and maintainable code. His attention to detail ensures every project meets high standards."
                        </p>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-xl shadow-xl hover:scale-105 transition-all duration-300 ease-in-out transform">
                        <div className="flex items-center justify-center mb-4">
                            <Logo className="w-29 h-29 text-cyan-300 fill-current" />

                        </div>
                        <h5 className="text-2xl font-bold text-cyan-700 mb-3">"Incredible Problem-Solving and Debugging Skills!"</h5>
                        <p className="dark:text-white">
                            "No challenge is too big for Alejandro. His approach to debugging and problem-solving is methodical, ensuring that even the toughest bugs are quickly resolved. He brings a calm confidence to every project."
                        </p>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-xl shadow-xl hover:scale-105 transition-all duration-300 ease-in-out transform">
                        <div className="flex items-center justify-center mb-4">
                            <Logo className="w-29 h-29 text-cyan-300 fill-current" />

                        </div>
                        <h5 className="text-2xl font-bold text-cyan-700 mb-3">"Highly Recommend for Full-Stack Projects!"</h5>
                        <p className="dark:text-white font-medium">
                            "Alejandro is a go-to developer for full-stack projects. His expertise in both front-end and back-end development, along with his seamless integrations, make him an invaluable asset to any project."
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CustomerSays;
