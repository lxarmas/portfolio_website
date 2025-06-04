import React from "react";
import about from "./images/ale_headshot.png";

function PersonalStory() {
    return (
        <section className="py-12 px-6 bg-white dark:bg-black border-none">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
                <div className="text-center md:text-left max-w-xl">

                    <h2 className="text-5xl font-extrabold bg-gradient-to-r from-sky-800 to-cyan-600 bg-clip-text text-transparent mb-2">
                        Why I am here?
                    </h2>
                    <p className="dark:text-white">
                        Alejandro Armas is a professional commercial photographer with over
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

export default PersonalStory;
