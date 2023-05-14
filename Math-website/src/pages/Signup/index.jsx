import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
export default function Signup() {
  const [showPass, setShowPass] = useState(false);

  const visibilityPassword = () => {
    setShowPass(!showPass);
  };

  return (
    <div className="Signup-Area">
      <Link to="/">
        <button className="homeBtn">
          Home<i id="geri" className="bi bi-caret-left"></i>
        </button>
      </Link>

      <div className="signup-wrapper">
        <img src="registerpage.png" />

        <div className="signup-form">
          <form action="">
            <label className="create-account">Create new account</label>
            <span className="i-am-a">I am a</span>
            <input id="check1" type="checkbox" />
            <span className="student">Student</span>
            <input id="check2" type="checkbox" />
            <span className="teacher">Teacher</span>
            <label className="date">Date of birth</label>
            <input type="date" />

            <label className="email">Email</label>
            <input type="email" />
            <label className="password">Password</label>
            <input type={showPass ? "text" : "password"} />

            {showPass ? (
              <i
                id="show"
                className="bi bi-emoji-heart-eyes"
                onClick={visibilityPassword}
              />
            ) : (
              <i
                id="hide"
                className="bi bi-emoji-heart-eyes-fill"
                onClick={visibilityPassword}
              />
            )}

            <input id="check3" type="checkbox" />
            <span className="i-accept">
              I accept (name) and Terms of Services
            </span>
            <span className="privacy-policy">
              <Link style={{ textDecoration: "none", color: "blue" }} to="">
                Privacy Policy
              </Link>
            </span>
            <span className="or">or</span>

            <button type="submit" className="signupBtn">
              Sign Up
            </button>

            <span className="google">
              <i className="bi bi-google" />
              Continue with Google
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
