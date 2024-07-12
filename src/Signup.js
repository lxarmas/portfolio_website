import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [email, setEmail] = useState("");
    const [captcha, setCaptcha] = useState("");
    const [captchainput, setCaptchInput] = useState("");
    const [error, setError] = useState("");

    const generatecaptcha = useCallback(() => {
        const list = [
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
            'U', 'V', 'W', 'X', 'Y', 'Z',
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
            'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
            'u', 'v', 'w', 'x', 'y', 'z'
        ];

        let newCaptcha = "";
        for (let i = 0; i < 6; i++) {
            newCaptcha += list[Math.floor(Math.random() * list.length)];
        }
        setCaptcha(newCaptcha);
    }, []);

    useEffect(() => {
        generatecaptcha();
    }, [generatecaptcha]);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (captcha !== captchainput) {
            setError("Captcha does not match! Please try again");
            generatecaptcha();
        } else {
            navigate("/login");
        }
    };

    const handleUserChange = (e) => {
        setUser(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPass(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleCaptchaInputChange = (e) => {
        setCaptchInput(e.target.value);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="signupform">
                <label htmlFor="username">Username</label><br />
                <input
                    type="text"
                    id="signuser"
                    value={user}
                    onChange={handleUserChange}
                    required
                    aria-label="username"
                /><br /><br />
                <label htmlFor="password">Password</label><br />
                <input
                    type="password"
                    id="signpass"
                    value={pass}
                    onChange={handlePasswordChange}
                    required
                /><br /><br />
                <label htmlFor="email">E-mail Address</label><br />
                <input
                    type="email"
                    id="signemail"
                    value={email}
                    onChange={handleEmailChange}
                    required
                /><br /><br />
                <label htmlFor="captcha">Captcha: {captcha}</label><br />
                <input
                    type="text"
                    id="captcha"
                    value={captchainput}
                    onChange={handleCaptchaInputChange}
                    required
                /><br /><br />

                {error && <p style={{ color: "red" }}>{error}</p>}

                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default Signup;
