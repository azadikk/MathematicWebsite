import React, { useState } from "react";
import "../ResponsiveHeader/Header.css";
import { Link } from "react-router-dom";

export default function ResponsiveHeader() {
  const NavItems = [
    { id: 1, title: "İmtahanlar" },
    { id: 2, title: "Onlayn videolar" },
    { id: 3, title: "Haqqımızda" },
  ];
  const [navbar, setNavbar] = useState(false);
  const openNavbar = () => {
    setNavbar(!navbar);
  };
  const RegisterItems = [
    { id: 1, title: "Log in" },
    { id: 2, title: "Sign up" },
  ];

  return (
    <div className="header-resp">
      <i className="bi bi-menu-button-wide" onClick={openNavbar} />
      <Link to="/" id="img">
        <img src="MathQuiz.png" alt="MathQuiz" />
      </Link>
      {navbar &&
        NavItems.map((items) => (
          <div key={items.id} className="navbar">
            <div key={items.id} className="ul">
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "1000",
                }}
                key={items.id}
                to={
                  items.title === "İmtahanlar"
                    ? "/imtahanlar"
                    : items.title === "Onlayn videolar"
                    ? "/onlayn-videolar"
                    : items.title === "Haqqımızda"
                    ? "/haqqimizda"
                    : ""
                }
              >
                <li key={items.id}>{items.title}</li>
              </Link>
            </div>
          </div>
        ))}
      <div className="RegisterItems">
        {RegisterItems.map((items) => (
          <Link
            style={{ textDecoration: "none", margin: "0px 5px" }}
            to={
              items.title === "Log in"
                ? "/login"
                : items.title === "Sign up"
                ? "/sign-up"
                : ""
            }
            key={items.id}
            className={
              (items.title === "Log in" ? "login" : "") ||
              (items.title === "Sign up" ? "signup" : "")
            }
          >
            {items.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
