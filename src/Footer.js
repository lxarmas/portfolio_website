import React from "react";
import alex_logo from "./images/logo.png"; // Main logo image

function Footer() {
    const stampSize = 180; // size of each stamp in px
    const rows = 8;        // rows of stamps
    const cols = 12;       // columns of stamps

    return (
        <footer
            className="py-12 px-6 md:px-16 bg-white dark:bg-black text-gray-800 dark:text-gray-200 border-none relative overflow-hidden min-h-[400px]"
        >
            {/* Overlay to soften the pattern */}
            <div className="absolute inset-0 bg-white dark:bg-black opacity-90 z-0"></div>

            {/* Diamond pattern logo stamps in background */}
            <div
                className="absolute top-0 left-0 w-full h-full grid pointer-events-none z-0"
                style={{
                    gridTemplateColumns: `repeat(${cols}, ${stampSize}px)`,
                    gridAutoRows: `${stampSize}px`,
                }}
            >
                {[...Array( rows )].map( ( _, rowIndex ) =>
                    [...Array( cols )].map( ( _, colIndex ) => {
                        const isOddRow = rowIndex % 2 === 1;
                        return (
                            <img
                                key={`${rowIndex}-${colIndex}`}
                                src={alex_logo}
                                alt="Logo Stamp"
                                className="opacity-20"
                                style={{
                                    gridColumnStart: colIndex + 1,
                                    gridRowStart: rowIndex + 1,
                                    width: `${stampSize}px`,
                                    height: `${stampSize}px`,
                                    objectFit: "contain",
                                    transform: isOddRow
                                        ? `translateX(${stampSize / 2}px) rotate(45deg)`
                                        : "rotate(45deg)",
                                }}
                            />
                        );
                    } )
                )}
            </div>

            {/* Footer Content */}
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-4">
                    <img
                        src={alex_logo}
                        alt="Alex Logo"
                        className="h-[120px] w-auto max-w-full"
                    />
                </div>

                {/* Contact Info */}
                <div className="text-center md:text-left mt-6 md:mt-0">
                    <h4 className="text-2xl font-extrabold bg-gradient-to-r from-sky-800 to-cyan-600 bg-clip-text text-transparent mb-2">
                        Contact
                    </h4>
                    <p className="mt-2 text-sm">📞 <b>+646 875 7574</b></p>
                    <p className="mt-1 text-sm">📧 <b>lxarmas@gmail.com</b></p>
                </div>

                {/* Social Media */}
                {/* Social Media */}
                <div className="text-center md:text-left mt-6 md:mt-0">
                    <h4 className="text-2xl font-extrabold bg-gradient-to-r from-sky-800 to-cyan-600 bg-clip-text text-transparent mb-2">
                        Follow Me
                    </h4>
                    <div className="flex justify-center md:justify-start gap-6 mt-3">
                        <a
                            href="https://www.instagram.com/westlaportraits/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 dark:text-gray-400 transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                            Instagram
                        </a>
                        <a
                            href="https://www.linkedin.com/in/alejandroarmas66/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 dark:text-gray-400 transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

            </div>

            {/* Footer Bottom */}
            <div className="relative z-10 text-center mt-10 text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} Alejandro Armas | All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;
