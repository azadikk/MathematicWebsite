import React, { useEffect, useRef, useState } from "react";
import "../style.css";
import { NavLink, Link } from "react-router-dom";
import Header from "../Header";
import DashboardContent from "./content";
import ImtahanlarPageContent from "../SecondPage/content";
import OnlaynVideolarContent from "../ThirdPage/content";
import ScoreBoardContents from "../FourthPage/content";
import HaqqimizdaContent from "../FiftyPage/content";
import "../Responsive.css";

export default function Dashboard() {
  const currentPath = window.location.pathname;
  const [active, setActive] = useState(false);
  const actived = () => {};

  // MOBILE - SIDEBAR - KODLAR
  const sidebarLeft = useRef(null);
  const openButton = useRef(null);
  const [mobile, setMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    const screen = () => {
      if (window.innerWidth <= 768) {
        setMobile(!mobile);
      }
      if (window.innerWidth >= 768) {
        setMobile(false);
        if (sidebarLeft.current) {
          sidebarLeft.current.style.display = "none";
        }
      }
    };
    screen();
    window.addEventListener("resize", screen);
    return () => window.removeEventListener("resize", screen);
  }, [setSidebar]);
  const openSidebar = () => {
    setSidebar(!sidebar);
    if (openButton.current) {
      openButton.current.style.display = "none";
    }
  };
  const closeSidebar = () => {
    setSidebar(false);
    if (openButton.current) {
      openButton.current.style.display = "block";
    }
  };
  setTimeout(() => {
    if (sidebarLeft.current) {
      sidebarLeft.current.style.left = "0px";
    }
  }, 0);

  return (
    <div className="container">
      {currentPath === "/dashboard" && <DashboardContent />}
      {currentPath === "/imtahanlar" && <ImtahanlarPageContent />}
      {currentPath === "/onlayn-videolar" && <OnlaynVideolarContent />}
      {currentPath === "/score-board" && <ScoreBoardContents />}
      {currentPath === "/haqqimizda" && <HaqqimizdaContent />}
      <Header />

      {/* MOBILE - SIDEBAR - RESPONSIVE  */}
      {mobile && (
        <>
          <button id="mobSideBtn" onClick={openSidebar} ref={openButton}>
            <i className="bi bi-list" />
          </button>
        </>
      )}
      {sidebar && (
        <div className="mobile-sidebar" ref={sidebarLeft}>
          <Link to="/" id="homeMath2">
            <img src="MathQuiz.png" />
          </Link>

          <button id="mobSideBtn2" onClick={closeSidebar}>
            <i className="bi bi-x-square" />
          </button>

          <Link to="/" id="homeMath2">
            <img src="MathQuiz.png" />
          </Link>
          <div className="nav2">
            <NavLink
              to="/dashboard"
              className={active ? "active" : "navlink"}
              onClick={actived}
            >
              <h1>
                <img src="dash-icon.png" />
                Dashboard
              </h1>
            </NavLink>

            <NavLink to="/imtahanlar" className="navlink">
              <h1>
                <img src="teach-img.png" />
                İmtahanlar
              </h1>
            </NavLink>

            <NavLink to="/onlayn-videolar" className="navlink">
              <h1>
                <img
                  src="video-play-img.png"
                  style={{ backgroundColor: "#202020", borderRadius: "50%" }}
                />
                Onlayn videolar
              </h1>
            </NavLink>

            <NavLink to="/score-board" className="navlink">
              <h1>
                <img src="chart.png" />
                ScoreBoard
              </h1>
            </NavLink>

            <NavLink to="/haqqimizda" className="navlink">
              <h1>
                <img src="about-img.png" />
                Haqqımızda
              </h1>
            </NavLink>
          </div>
        </div>
      )}

      <div className="sidebar">
        <Link to="/" id="homeMath">
          <img src="MathQuiz.png" />
        </Link>

        <div className="nav">
          <NavLink
            to="/dashboard"
            className={active ? "active" : "navlink"}
            onClick={actived}
          >
            <h1>
              <img src="dash-icon.png" />
              Dashboard
            </h1>
          </NavLink>

          <NavLink to="/imtahanlar" className="navlink">
            <h1>
              <img src="teach-img.png" />
              İmtahanlar
            </h1>
          </NavLink>

          <NavLink to="/onlayn-videolar" className="navlink">
            <h1>
              <img
                src="video-play-img.png"
                style={{ backgroundColor: "#202020", borderRadius: "50%" }}
              />
              Onlayn videolar
            </h1>
          </NavLink>

          <NavLink to="/score-board" className="navlink">
            <h1>
              <img src="chart.png" />
              ScoreBoard
            </h1>
          </NavLink>

          <NavLink to="/haqqimizda" className="navlink">
            <h1>
              <img src="about-img.png" />
              Haqqımızda
            </h1>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
