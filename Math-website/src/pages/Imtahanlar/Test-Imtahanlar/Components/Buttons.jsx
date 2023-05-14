import React from "react";
import { useState } from "react";
import Lastpage from "../Lastpage";

export default function Buttons() {
  const [progress, setProgress] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleButtonClick = () => {
    if (progress < 200) {
      setProgress(progress + 50);
      setCurrentPage(currentPage + 1);
    }
  };
  const handleBackButton = () => {
    if (progress > 0) {
      setProgress(progress - 50);
      setCurrentPage(currentPage - 1);
    }
  };
  const getColor = () => {
    if (progress > 150) {
      return "green";
    } else if (progress > 100) {
      return "red";
    } else if (progress > 70) {
      return "blue";
    } else {
      return "black";
    }
  };

  return (
    <>
      <div className="buttons-pages">
        <button
          className={currentPage ? "disabled" : "nextPage"}
          onClick={handleButtonClick}
          disabled={currentPage === 5}
        >
          Novbəti səhifə
        </button>
        <button className="backBtn" onClick={handleBackButton}>
          Əvvəlki səhifə
        </button>
      </div>
      <div className="progressBar" style={{ zIndex: "99" }}>
        <span
          className="pages"
          style={{ fontWeight: "1000", borderBottom: "1px solid #cecece" }}
        >
          Səhifə {currentPage} / 5
        </span>
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%`, backgroundColor: getColor() }}
        ></div>
      </div>

      {currentPage === 5 ? <Lastpage /> : null}
    </>
  );
}
