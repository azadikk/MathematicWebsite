import React, { useState } from "react";
import "../Login/Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [show, setShow] = useState(false);

  const clickToVisible = () => {
    setShow(!show);
  };

  return (
    <div className="Login-Area">
      <Link to="/">
        <button className="homeBtn">
          Home<i id="geri" className="bi bi-caret-left"></i>
        </button>
      </Link>

      <div className="login-wrapper">
        <img src="registerpage.png" />

        <div className="login-form">
          <form action="">
            <label className="create-account">Login</label>
            <label className="email">Email</label>
            <input type="email" />
            <label className="password">Password</label>
            <input type={show ? "password" : "text"} />

            {show ? (
              <i
                id="show"
                className="bi bi-emoji-heart-eyes"
                onClick={clickToVisible}
              />
            ) : (
              <i
                id="hide"
                className="bi bi-emoji-heart-eyes-fill"
                onClick={clickToVisible}
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

            <button type="submit" className="loginBtn">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
