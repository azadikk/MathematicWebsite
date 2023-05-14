import React from "react";
import { Link } from "react-router-dom";
export default function TestsehifesiHeader() {
  return (
    <div className="header-pages">
      <div className="header-left">
        <h1>
          <Link to="/" className="back">
            <i className="bi bi-backspace" />
          </Link>
          İmtahan
        </h1>
      </div>
      <div className="header-right">
        <h1>
          username@gmail.com
          <i className="bi bi-caret-down" style={{ cursor: "pointer" }} />
        </h1>
        <img src="../profil.png" />
      </div>
    </div>
  );
}
