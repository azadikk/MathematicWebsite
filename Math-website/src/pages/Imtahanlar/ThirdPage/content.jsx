import React, { useRef } from "react";
import { useState, useEffect } from "react";

export default function OnlaynVideolarContent() {
  const [data, setData] = useState(false);

  const videoref = useRef(null);
  const fullScreen = () => {
    if (videoref.current) {
      videoref.current.requestFullscreen();
    }
  };
  useEffect(() => {
    fetch("http://localhost:3000/onlaynVideolarDetails")
      .then((resp) => resp.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error + "XETA!"));
  });

  const newData = (
    <div className="Video-area">
      {data &&
        data.map((items) =>
          Array.from({ length: 10 }).map((_, i) => {
            return (
              <div className="videos" key={`${items.id}-${i}`}>
                <video
                  className="Video"
                  src={items.video}
                  controls
                  muted
                  loop
                  ref={videoref}
                />
                <h1 className="title">{items.title}</h1>
                <button className="videonuIzle" onClick={fullScreen}>
                  {items.button}
                </button>
              </div>
            );
          })
        )}
    </div>
  );

  return <div className="onlayn-videolar-content">{newData}</div>;
}
