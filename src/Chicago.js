import React from "react";
import about from "./images/OwnerProfile3.jpg";

function Chicago() {
    return (
        <section className="py-12 px-6 bg-white dark:bg-black border-none">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
                <div className="text-center md:text-left max-w-xl">
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
                        Why I am here
                    </h1>
                    <h3 className="text-2xl font-semibold mt-4 text-gray-700 dark:text-gray-300">
                        My story
                    </h3>
                    <p className="mt-4 text-gray-800 dark:text-gray-300 leading-relaxed">
                        Alex Armas is a professional commercial photographer with over
                        fifteen years of experience. After the COVID pandemic, he had a
                        revelation that coding would be the next chapter of his life. Since
                        then, he has developed unique application systems that seamlessly
                        blend technology, art, and commerce.
                    </p>
                </div>

                <div className="flex justify-center">
                    <img
                        src={about}
                        alt="Alex Armas headshot"
                        className="w-48 h-auto rounded-lg shadow-lg md:w-60 lg:w-72"
                    />
                </div>
            </div>
        </section>
    );
}

export default Chicago;
