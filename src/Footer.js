import React from "react";
import alex_logo from "./images/alex_logo.png";

function Footer() {
    return (
        <footer
            className={`py-12 px-6 md:px-16 bg-white dark:bg-black text-gray-800 dark:text-gray-200 border-none`}
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-4">
                    <img src={alex_logo} alt="Alex Logo" className="w-16 h-16" />
                    <span className="text-lg font-semibold">Alex Armas</span>
                </div>

                {/* Contact Info */}
                <div className="text-center md:text-left mt-6 md:mt-0">
                    <h4 className="text-lg font-bold text-gray-700 dark:text-gray-200">
                        Contact
                    </h4>
                    <p className="mt-2 text-sm">📞 <b>+646 875 7574</b></p>
                    <p className="mt-1 text-sm">📧 <b>lxarmas@gmail.com</b></p>
                </div>

                {/* Social Media Links */}
                <div className="text-center md:text-left mt-6 md:mt-0">
                    <h4 className="text-lg font-bold text-gray-700 dark:text-gray-200">
                        Follow Me
                    </h4>
                    <div className="flex justify-center md:justify-start gap-6 mt-3">
                        <a
                            href="https://www.instagram.com/westlaportraits/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
                        >
                            Instagram
                        </a>
                        <a
                            href="https://www.linkedin.com/in/alejandroarmas66/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center mt-10 text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} Alex Armas | All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;
