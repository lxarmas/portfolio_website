import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./loginsignup.css"

function Login(){

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleUserChange = (e) => {
        setUser(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return(
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className="loginform">
                <label htmlFor="username">Username<br></br></label>
                <input
                    type="text"
                    id="user"
                    required
                    value={user}
                    onChange={handleUserChange}
                /><br></br><br></br>

                <label htmlFor="password">Password<br></br></label>
                <input
                    type="password"
                    id="pass"
                    required
                    value={password}
                    onChange={handlePasswordChange}
                /><br></br><br></br>

                <input type="checkbox" required />
                <label>i agree</label><br></br><br></br>

                <input type="submit" value="Login" />

                <h6>Don't have an account?<br></br></h6>
                <div className="signup-link">
                    <Link to="/signup">Sign Up</Link>
                </div>
            </form>
        </>

    )
}

export default Login;