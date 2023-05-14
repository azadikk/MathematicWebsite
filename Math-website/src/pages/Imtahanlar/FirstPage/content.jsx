import React, { useRef, useState } from "react";
import "../style.css";
import { Link } from "react-router-dom";

export default function DashboardContent() {
  const [more, setMore] = useState(false);
  const box = useRef(null);
  const ForMore = () => {
    if (box.current) {
      setMore(!more);
      box.current.style.height = more ? "355px" : "210px";
      box.current.style.top = more ? "70px" : "0px";
      box.current.style.zIndex = "1";
    }
  };

  const BoxItemsDetails = [
    {
      id: 1,
      img: "dashboards.png",
      progressBar: "progressBar.png",
      barDetail: "23/25",
      barDetail2: "100%",
      question: "25sual",
      name: "Filankəs Filankəsov",
      release: "9-cu sinif buraxılış",
      button: "Daha ətraflı",
    },
  ];

  const boxItem = BoxItemsDetails.map((items) => (
    <div key={items.id} className="dataItems">
      <img src={items.img} />
      <span className="question" style={{ color: "#D44949" }}>
        {items.question}
      </span>
      <span className="name" style={{ color: "#D44949" }}>
        {items.name}
      </span>
      <span className="release">{items.release}</span>
      <img id="progressBar" src={items.progressBar} />
      <h1 className="barDetail1">{items.barDetail}</h1>
      <h2 className="barDetail2" style={{ color: "#D44949" }}>
        {items.barDetail2}
      </h2>
      <button className="daha-etrafliBtn" type={items.id}>
        {items.button}
      </button>
    </div>
  ));

  return (
    <div className="dashboard-contents">
      <div className="Up-Box-Wrapper">
        <div className="Box-1">
          <img id="profile" src="harry-miller-profile.png" />
          <span className="details">
            <strong className="harry">Harry Miller</strong>
            <h1 className="age">
              Age: <strong>19 years</strong>
            </h1>
            <h2 className="parents">
              Parents: <strong>Jhon Miller</strong>
            </h2>
            <h3>
              <span className="goals">Goals</span>
              <img src="medal.png" />
              <img src="tac.png" />
              <img src="medal2.png" />
            </h3>
          </span>
        </div>

        <div
          className="Box-2"
          ref={box}
          style={{ transition: "0.5s ease-out" }}
        >
          <span>9-cu sinif buraxılış</span>
          <span>11-ci sinif buraxılış</span>
          <span>Məntiq imtahanı</span>

          <img src="medal.png" />
          <img src="tac.png" />
          <img src="medal2.png" />

          <Link
            to=""
            style={{
              fontWeight: "bold",
              color: "blue",
              textDecoration: "none",
            }}
            className="see-more"
            onClick={ForMore}
          >
            See more
          </Link>
        </div>
      </div>

      <div className="Down-Box-Wrapper">
        <div className="dataitems">
          <h1 className="title">İmtahanlar</h1>
          <div className="Box-1">{boxItem}</div>
          <div className="Box-2">{boxItem}</div>
          <div className="Box-3">{boxItem}</div>
          <div className="Box-4">{boxItem}</div>
        </div>
      </div>
    </div>
  );
}
