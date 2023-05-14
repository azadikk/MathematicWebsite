import "./Header.css";
import "./ResponsiveHeader/Header.css";
import { Link } from "react-router-dom";
import ResponsiveHeader from "./ResponsiveHeader/Header";
import { useEffect, useState } from "react";
export default function Header(props) {
  const NavbarItems = [
    { id: 1, name: "İmtahanlar" },
    { id: 2, name: "Onlayn videolar" },
    { id: 3, name: "Haqqımızda" },
  ];

  const RegisterItems = [
    { id: 1, title: "Log in" },
    { id: 2, title: "Sign up" },
  ];

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const setMobileVersion = () => {
      if (window.innerWidth <= 576) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    setMobileVersion();
    window.addEventListener("resize", setMobileVersion);
    return () => window.removeEventListener("resize", setMobileVersion);
  }, [setMobile]);

  return (
    <>
      {mobile && <ResponsiveHeader />}

      <div className="Header">
        <h1>{props.name}</h1>
        <Link to="/">
          <img src="MathQuiz.png" />
        </Link>
        <ul className="Header-ul">
          {NavbarItems.map((items) => (
            <Link
              key={items.id}
              to={
                items.name === "İmtahanlar"
                  ? "/imtahanlar"
                  : items.name === "Onlayn videolar"
                  ? "/onlayn-videolar"
                  : items.name === "Haqqımızda"
                  ? "/haqqimizda"
                  : ""
              }
              style={{ textDecoration: "none" }}
            >
              <li key={items.id}>{items.name}</li>
            </Link>
          ))}
        </ul>

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
    </>
  );
}
