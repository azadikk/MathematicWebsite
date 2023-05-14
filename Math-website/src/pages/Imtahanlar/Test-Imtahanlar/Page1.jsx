import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import TestsehifesiHeader from "./Components/testHeader";
import Testheadercontent from "./Components/Test-header-content";
import { useDispatch } from "react-redux";
import nameSlice, { setName } from "../../../redux/reducers/nameSlice";
import "../Test-Imtahanlar/Responsive.css";

export default function Page1() {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(setName(e.target.value));
  };

  const telebeadi = useRef("");
  const vaxt = useRef("");
  const suallar = useRef("");
  const [isValid, setIsValid] = useState(false);
  const [warning, setWarning] = useState("");
  const clicked = () => {
    if (
      telebeadi.current.value === "" &&
      vaxt.current.value === "" &&
      suallar.current.value === ""
    ) {
      alert(
        "ZƏHMƏT OLMASA BÜTÜN XANALARI DOLDURUN. ƏKS TƏQDİRDƏ, İMTAHANA BAŞLAYA BİLMƏYƏCƏKSİNİZ."
      );
    }
  };

  useEffect(() => {
    const controller = () => {
      const telebeValue = telebeadi.current.value;
      const vaxtValue = vaxt.current.value;
      const suallarValue = suallar.current.value;
      if (telebeValue === "") {
        setIsValid(false);
        setWarning("TƏLƏBƏ ADI BOŞ OLA BİLMƏZ.");
      } else if (vaxtValue === "") {
        setIsValid(false);
        setWarning("VAXTI SEÇİN ZƏHMƏT OLMASA.");
      } else if (suallarValue === "") {
        setIsValid(false);
        setWarning("SUALLARIN SAYINI YAZMALISINIZ.");
      } else {
        setIsValid(true);
      }
    };

    document.addEventListener("change", controller);
    return () => document.removeEventListener("change", controller);
  }, []);

  return (
    <div className="testeBasla">
      <TestsehifesiHeader />
      <div className="container">
        <Testheadercontent />
        <div className="header-down-content">
          <article className="telebe-adi">
            <span>Tələbə adı</span>
            <input
              type="text"
              placeholder="Tələbə adı: "
              required
              ref={telebeadi}
              onChange={handleInputChange}
            />
          </article>
          <article className="imtahan-vaxti">
            <span>İmtahan vaxtı</span>
            <input
              type="text"
              placeholder="Misal: 1saat "
              required
              ref={vaxt}
            />
          </article>
          <article className="suallarin-sayi">
            <span>Sualların sayı</span>
            <input
              type="text"
              placeholder="Misal: 25 "
              required
              ref={suallar}
            />
          </article>
        </div>

        <div className="main-content">
          <img src="imtahantest.png" />
          <p>
            Məlumatlar doğrudursa imtahana başlaya bilərsiniz, <br />
            başladıqdan sonra əvvəlki səhifəyə qayıda <br />
            bilməyəcəksiniz. <br />
          </p>
          <Link
            onClick={() => {
              clicked();
            }}
            className="startBtn"
            style={{ textDecoration: "none" }}
            to={isValid ? "/teste-basla/imtahan-sehife-1" : "/teste-basla"}
          >
            İmtahana başla
          </Link>
          <h1
            style={{
              color: "red",
              fontSize: "15px",
              padding: "5px 30px",
            }}
          >
            {warning}
          </h1>
        </div>
      </div>
    </div>
  );
}
