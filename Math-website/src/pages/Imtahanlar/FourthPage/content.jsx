import React from "react";
import { useEffect, useState } from "react";

export default function ScoreBoardContents() {
  const [data, setData] = useState(false);
  useEffect(() => {
    fetch("http://localhost:3000/boards")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  const board = (
    <div>
      {data &&
        data.map((items) => (
          <div className="items" key={items.id}>
            <img src={items.profile} alt="gozlenilmez problem oldu.." />
            <div className="name">
              <h1 className="name">{items.name}</h1>
            </div>
            <div className="point">
              <h2 className="point">{items.point}</h2>
            </div>
            <div className="quotes">
              <h3 className="quotes">{items.experience}</h3>
            </div>
          </div>
        ))}
    </div>
  );
  return (
    <div className="score-board">
      {board}
      <div className="table">
        <h1 className="name">Name</h1>
        <h1 className="exp">Experience</h1>
      </div>
    </div>
  );
}
