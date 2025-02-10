// Footer.js
import React from "react";
import alex_logo from "./images/alex_logo.png";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <img src={alex_logo} alt="footerlogo" className="footer-logo" />
                <div className="footer-contact">
                    <h4>Contact</h4>
                    <p><em><b>+646 875 7574</b></em></p>
                    <p><em><b>lxarmas@gmail.com</b></em></p>
                </div>
                <div className="footer-media">
                    <h4>Social Media Links</h4>
                    <ul className="social-links">
                        <li><a href="https://www.instagram.com/westlaportraits/">Instagram</a></li>

                        <li><a href="https://www.linkedin.com/in/alejandroarmas66/">Twitter</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
