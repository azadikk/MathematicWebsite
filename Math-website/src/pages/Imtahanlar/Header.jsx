import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [openProfile, setOpenProfile] = useState(false);
  const OpenProfile = () => {
    setOpenProfile(!openProfile);
  };

  const currentPath = window.location.pathname;
  const pageNames = {
    "/dashboard": "Dashboard",
    "/imtahanlar": "İmtahanlar",
    "/onlayn-videolar": "Onlayn videolar",
    "/score-board": "ScoreBoard",
    "/haqqimizda": "Haqqımızda",
  };
  const currentPageNames = pageNames[currentPath];

  return (
    <div className="header">
      <h1>{currentPageNames}</h1>
      <span className="profile">
        <img src="profil.png" id="profile" />
        username@gmail.com
        <img src="arrow-down.png" onClick={OpenProfile} />
      </span>

      {openProfile && (
        <div className="OpenProfile">
          <NavLink to="" style={{ textDecoration: "none", color: "#282828" }}>
            Profil
          </NavLink>
          <NavLink to="" style={{ textDecoration: "none", color: "#282828" }}>
            Tənzimləmələr
          </NavLink>
          <NavLink to="" style={{ textDecoration: "none", color: "#282828" }}>
            Çıxış
          </NavLink>
        </div>
      )}
    </div>
  );
}
