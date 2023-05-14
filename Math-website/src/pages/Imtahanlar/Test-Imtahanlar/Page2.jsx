import "../style.css";
import TestsehifesiHeader from "./Components/testHeader";
import Testheadercontent from "./Components/Test-header-content";
import Buttons from "./Components/Buttons";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Page2() {
  const name = useSelector((state) => state.name.name);



  const [data, setData] = useState(false);
  const [selectedRadios, setSelectedRadios] = useState({});
  const handleRadioChange = (e, id) => {
    setSelectedRadios({ ...selectedRadios, [id]: e.target.value });
  };

  useEffect(() => {
    fetch("http://localhost:3000/questions")
      .then((resp) => resp.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  const Questions =
    data &&
    data.map((item) =>
      Array.from({ length: 3 }, (_, i) => {
        const id = `${item.id}-${i}`;
        const selectedValue = selectedRadios[id] || "";

        return (
          <div className="questions" key={id}>
            <h1>{item.question}</h1>
            <h2>{item.title}</h2>
            <div className="variants">
              {Object.values(item.variants[0]).map((variant, index) => {
                const value = `${index}`;

                return (
                  <div key={index} className="area">
                    <input
                      type="radio"
                      value={value}
                      checked={value === selectedValue}
                      onChange={(e) => handleRadioChange(e, id)}
                    />
                    <span>{variant}</span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })
    );

  return (
    <div className="page2Container">
      <TestsehifesiHeader />
      <div className="content-page2">
        <Testheadercontent />
        <div className="infoArea">
          <span>
            <input type="text" placeholder={'Tələbə adınız:' + `${name}` }/>
          </span>
          <i className="bi bi-person-fill-dash" />

          <div className="box">
            <h1>
              İmtahan vaxtı: <strong>59:59</strong>
            </h1>
            <i className="bi bi-alarm" />
          </div>
        </div>

        <div className="questions">
          <div className="question-box">{Questions}</div>
        </div>
        <Buttons title="aaaa" />
      </div>
    </div>
  );
}
