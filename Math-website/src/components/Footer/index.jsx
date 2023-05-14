import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
        <div className="container">
      <div className="layout1">
        <h1>MathQuiz</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur
          <br />
          adipisicing elit. Placeat excepturi <br />
          repudiandae ad aspernatur in nostrum <br />
          perspiciatis magnam. Id omnis
          <br />
          asperiores vel cumque accusamus
          <br />
          maiores, numquam quae <br />
          necessitatibus ut impedit sapiente.
        </p>
      </div>

      <div className="layout2">
        <h1>Imtahanlarımız</h1>
        <h2>5-8ci siniflər</h2>
        <h2>9-11ci siniflər</h2>
        <h2>Məntiq imtahanları</h2>
        <h2>Blok imtahanları</h2>
        <h2>Buraxılış imtahanları</h2>
      </div>

      <div className="layout3">
        <h1>Dəstək</h1>
        <h2>Dərsliklər</h2>
        <h2>Ödəniş Şərtləri və Qaydaları</h2>
        <h2>Əlaqə</h2>
      </div>


        <div className="social">
            <i className="bi bi-youtube"></i>
            <i className="bi bi-whatsapp"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
        </div>
      
    </div>

    <div className="footer-right-components">
        <span className="text1">
            <strong>Əlaqə Nömrəsi</strong>
            <span>+994 77 399 99 66</span>
            <i className="bi bi-telephone"></i>
        </span>

        <span className="text2">
            <strong>Ünvan</strong>
            <span>N.Nərimanov m/s yaxınlığı</span>
            <i className="bi bi-geo-alt"></i>
        </span>


      </div>
    </div>
  );
}
