import React, { useState, useEffect } from "react";
import "../style.css";


export default function ImtahanlarPageContent() {
  const [data, setData] = useState(false);
  const [dataReyting, setDataReyting] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/exams")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));

    fetch("http://localhost:3000/reyting")
      .then((response) => response.json())
      .then((dataReyting) => setDataReyting(dataReyting))
      .catch((error) => console.log(error));
  }, []);

  const Datas = (
    <div className="Boxes-area">
      {data &&
        data.map((items) =>
          Array.from({ length: 10 }).map((_, i) => (
            <div key={`${items.id}-${i}`} className="Boxes">
              <img src={items.img} alt="Daha sonra yeniden yukleyin." />
              <span className="title1">{items.title1}</span>
              <span className="title2">{items.title2}</span>
              <span>{items.title3}</span>
              <button className="dahaEtrafliBtn">{items.Button}</button>
              <button className="testeBaslaBtn">{items.Button2}</button>
            </div>
          ))
        )}
    </div>
  );

  const Reyting = (
    <div className="Reyting-area">
      {dataReyting &&
        dataReyting.map((items) =>
          Array.from({ length: 6 }).map((_, i) => (
            <div key={`${items.id}-${i}`} className="reytings">
              <img src={items.logo} alt="Xeta oldu!" />
              <span className="date">{items.name}</span>
              <span>{items.point}</span>
              <span className="date">{items.date}</span>
            </div>
          ))
        )}
    </div>
  );

  return (
    <div className="imtahanlarContent">
      <div className="search-area">
        <div className="input">
          <input type="search" placeholder="Search your items" />
          <img id="search-icon" src="search.png" />
        </div>
        <div className="options">
          <select id="select1">
            <option>Növ</option>
            <option>1.ci növ</option>
            <option>2.ci növ</option>
            <option>3.ci növ</option>
            <option>4.ci növ</option>
            <option>5.ci növ</option>
          </select>

          <select id="select2">
            <option>Qiymət</option>
            <option>59.99azn</option>
            <option>449.99azn</option>
            <option>29.10azn</option>
            <option>100azn</option>
            <option>580azn</option>
          </select>
        </div>
      </div>
      <div className="Boxes">{Datas}</div>
      <div className="imtahanlarContent-2">
        <div className="wrapper">
          <img id="image1" src="Image1.png" />
          <span className="text">
            <h1 style={{ fontSize: "25px" }}>9-cu sinif buraxılış</h1>
            <p
              style={{
                color: "#8A7E7E",
                fontSize: "14px",
                position: "absolute",
                top: "3rem",
                width: "200%",
              }}
            >
              Natural ədədlər.Adi və onluq kəsrlər.Faiz.Tam cəbri <br />
              ifadələr.Çoxhədlinin vuruqlara ayrılması.Birməchullu <br />
              tənliklər.n dərəcəli Köklər.Rasional kəsrlər.Kəsr üstlü <br />
              qüvvətin xassələri.Üçbucaqlar.Çevrə.
            </p>
            <h2
              style={{
                color: "#D44949",
                fontSize: "13px",
                position: "absolute",
                top: "9rem",
              }}
            >
              Pulsuz
            </h2>
          </span>

          {/* REYTINQ QUTUSU */}
          <h5 className="reyting">Reyting</h5>
          <div>{Reyting}</div>
        </div>

        <img id="wrapper-img" src="Frame69.png" />
      </div>
    </div>
  );
}
