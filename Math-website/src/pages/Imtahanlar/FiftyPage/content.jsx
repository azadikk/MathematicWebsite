import React from "react";
import "../style.css";

export default function HaqqimizdaContent() {
  const Profarray = [
    {
      id: 1,
      name_surname: "Ad Soyad",
      job: "İş",
      work: "Riyaziyyat Müəllimi",
      birth: "Yaş",
      num: "27",
      experience: "İş təcrübəsi",
      num2: "5 il",
      img: 'Frame 187.png',
    },
  ];

  return (
    <div className="about-content">
      <div className="profil-page">
        {Profarray.map((items) => (
          <article key={items.id}className="details">
            <img id='prof'src={items.img} alt="Problem oldu!" />
            <h1 style={{ fontSize: "18px" }} >
              {items.name_surname}
            </h1>
            <h1 style={{ fontSize: "18px" }} >
              {items.job}:{" "}
              <span style={{ color: "#8A7E7E", fontSize: "15px" }}>
                {items.work}
              </span>
            </h1>
            <h1 style={{ fontSize: "18px" }} >
              {items.birth}:{" "}
              <span style={{ color: "#8A7EE", fontSize: "15px" }}>
                {items.num}
              </span>
            </h1>
            <h1 style={{ fontSize: "18px" }} >
              {items.experience}:{" "}
              <span style={{ color: "#8A7EE", fontSize: "15px" }}>
                {items.num2}
              </span>
            </h1>
          </article>
        ))}
      </div>

      <span className="text">
        <p style={{ color: "black" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          <br />
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          <br />
          since the 1500s, when an unknown printer took a galley of type and
          <br />
          scrambled it to make a type specimen book. It has survived not only
          <br />
          five centuries, but also the leap into electronic typesetting,
          <br />
          remaining essentially unchanged. It was popularised in the 1960s with
          <br />
          the release of Letraset sheets containing Lorem Ipsum passages, and
          <br />
          more recently with desktop publishing software like Aldus PageMaker
          <br />
          including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
          <br />
          the printing and typesetting industry. Lorem Ipsum has been the
          <br />
          industry's standard dummy text ever since the 1500s, when an unknown
          <br />
          printer took a galley of type and scrambled it to make a type specimen
          <br />
          book. It has survived not only five centuries, but also the leap into
          <br />
          electronic typesetting, remaining essentially unchanged. It was
          <br />
          popularised in the 1960s with the release of Letraset sheets
          <br />
          containing Lorem Ipsum passages, and more recently with desktop
          <br />
          publishing software like Aldus PageMaker including versions of Lorem
          <br />
          Ipsum.
        </p>
      </span>
    </div>
  );
}
