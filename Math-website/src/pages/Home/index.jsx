import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Box1 from "./Box1/Box1";
import Box2 from "./Box2/Box2";
import Box3 from "./Box3/Box3";
import "./index.css";
import PageContainer from "../../components/PageContainer";

const imgs = ["carousel-img.png", "Box3img.png", "box3imgg.png"];
const ids = ["ilkSekil", "ikinciSekil", "ucuncuSekil"];

export default function Home() {
  const [image, setImage] = useState(0);

  const prevFoo = () => {
    if (image <= 0) {
        setImage(2)
    } else {
      setImage(image - 1)
    }
  };

  const nextFoo = () => {
    if (image >= 2) {
      setImage(0);
    } else {
      setImage(image + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextFoo();
    }, 1700);
    return () => clearInterval(interval);
  }, [image]);

  return (
    <PageContainer>
      <div className="Content">
        <div className="carousel">
          <img src={imgs[image]} id={ids[image]} />
          <h1>
            <strong id="strong">9-cu sinif</strong>
            Buraxılış imtahanı
          </h1>

          <img id="leftBtn" src="vectorLeft.png" onClick={prevFoo} />
          <img id="rightBtn" src="vectorRight.png" onClick={nextFoo} />
        </div>

        <div className="carousel-left-content">
          <h1>
            9-cu sinif buraxılış riyaziyyat <br />
            imtahanı
          </h1>
          <h2>Pulsuz şəkildə başla</h2>
          <Link to='/teste-basla'>
          <button className="TesteBasla">Testə başla</button>
          </Link>

          <button className="DahaEtrafli">Daha ətraflı</button>
        </div>

        <Box1 />
        <Box2 />
        <Box3 />
      </div>
    </PageContainer>
  );
}
