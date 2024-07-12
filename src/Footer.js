import React from "react";
import logo from "./logo.jpg";

function Footer() {
    return (
        <footer className="footer">
            <img src={logo} alt="footerlogo" className="footer-logo" />
            <div className="footer-contact">
                <h4>Contact</h4>
                <p><em><b>+123-9876543210</b></em></p>
                <p><em><b>littlelemon@gmail.com</b></em></p>
            </div>
            <div className="footer-media">
                <h4>Social Media Links</h4>
                <ul className="social-links">
                    <li><a href="https://instagram.com">Instagram</a></li>
                    <li><a href="https://facebook.com">Facebook</a></li>
                    <li><a href="https://x.com">Twitter</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;