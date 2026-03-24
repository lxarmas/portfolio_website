import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [user,         setUser]         = useState("");
  const [pass,         setPass]         = useState("");
  const [email,        setEmail]        = useState("");
  const [captcha,      setCaptcha]      = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [error,        setError]        = useState("");
  const [showPass,     setShowPass]     = useState(false);

  const sectionRef = useRef(null);
  const spotRef    = useRef(null);
  const navigate   = useNavigate();

  // Cursor spotlight
  useEffect(() => {
    const section = sectionRef.current;
    const spot    = spotRef.current;
    if (!section || !spot) return;

    let raf;
    let tx = window.innerWidth  / 2;
    let ty = window.innerHeight / 2;
    let cx = tx, cy = ty;

    const onMove = (e) => {
      const rect = section.getBoundingClientRect();
      tx = e.clientX - rect.left;
      ty = e.clientY - rect.top;
    };

    const animate = () => {
      cx += (tx - cx) * 0.07;
      cy += (ty - cy) * 0.07;
      spot.style.background = `radial-gradient(600px circle at ${cx}px ${cy}px, rgba(255,255,255,0.055) 0%, transparent 70%)`;
      raf = requestAnimationFrame(animate);
    };

    section.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);
    return () => {
      section.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const generateCaptcha = useCallback(() => {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    setCaptcha(result);
    setCaptchaInput("");
  }, []);

  useEffect(() => { generateCaptcha(); }, [generateCaptcha]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captcha !== captchaInput) {
      setError("Captcha doesn't match. Please try again.");
      generateCaptcha();
    } else {
      navigate("/login");
    }
  };

  return (
    <section className="ps" ref={sectionRef}>
      {/* Spotlight */}
      <div className="ps-spotlight" ref={spotRef} />

      {/* Index mark */}
      <div className="ps-index">
        <span>00</span>
        <span>Sign up</span>
      </div>

      <div className="ps-body">

        {/* Left — branding */}
        <div className="ps-left">
          <div className="ps-eyebrow">
            <span className="ps-line" />
            Get started
          </div>
          <h2 className="ps-title">
            <span className="ps-word ps-word--1">Create your</span>
            <span className="ps-word ps-word--2"><em>account.</em></span>
          </h2>
          <p className="ps-sub">
            Already have an account?{" "}
            <button className="ps-text-link" onClick={() => navigate("/login")}>
              Sign in
            </button>
          </p>
        </div>

        {/* Right — form */}
        <div className="ps-right">
          <form className="ps-form" onSubmit={handleSubmit} noValidate>

            {/* Username */}
            <div className="ps-field">
              <label className="ps-label" htmlFor="signuser">Username</label>
              <input
                className="ps-input"
                type="text"
                id="signuser"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder="your_handle"
                required
                autoComplete="username"
              />
            </div>

            {/* Email */}
            <div className="ps-field">
              <label className="ps-label" htmlFor="signemail">Email address</label>
              <input
                className="ps-input"
                type="email"
                id="signemail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                autoComplete="email"
              />
            </div>

            {/* Password */}
            <div className="ps-field">
              <label className="ps-label" htmlFor="signpass">Password</label>
              <div className="ps-input-wrap">
                <input
                  className="ps-input"
                  type={showPass ? "text" : "password"}
                  id="signpass"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  placeholder="••••••••"
                  required
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className="ps-toggle"
                  onClick={() => setShowPass((v) => !v)}
                  aria-label="Toggle password visibility"
                >
                  {showPass ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Captcha */}
            <div className="ps-field">
              <div className="ps-captcha-row">
                <label className="ps-label" htmlFor="captcha">Verify</label>
                <div className="ps-captcha-display" aria-label="captcha code">
                  {captcha.split("").map((char, i) => (
                    <span key={i} className="ps-captcha-char">{char}</span>
                  ))}
                  <button
                    type="button"
                    className="ps-captcha-refresh"
                    onClick={generateCaptcha}
                    aria-label="Refresh captcha"
                  >
                    {/* Refresh icon */}
                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M13.5 8A5.5 5.5 0 1 1 8 2.5c1.8 0 3.4.87 4.4 2.2M13.5 2v3h-3"
                        stroke="currentColor" strokeWidth="1.2"
                        strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
              <input
                className="ps-input"
                type="text"
                id="captcha"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                placeholder="Enter code above"
                required
                autoComplete="off"
              />
            </div>

            {/* Error */}
            {error && (
              <div className="ps-error" role="alert">
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1"/>
                  <path d="M8 5v3.5M8 10.5v.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                {error}
              </div>
            )}

            {/* Submit */}
            <button type="submit" className="ps-btn-primary">
              Create account
              <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 12L12 2M12 2H5M12 2v7"
                  stroke="currentColor" strokeWidth="1.2"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="ps-bar">
        <span className="ps-avail">
          <span className="ps-dot" />
          Secure sign up
        </span>
        <span className="ps-loc">Los Angeles, CA</span>
      </div>
    </section>
  );
}

export default Signup;