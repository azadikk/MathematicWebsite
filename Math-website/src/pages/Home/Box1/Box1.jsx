import "./Box1.css";

export default function Box1() {
  return (
    <div className="Box1">
      <div className="area1">
        <img src="area1.png" />
        <strong>
          <span>9-cu sinif buraxılışı</span>
        </strong>
        <span>Pulsuz şəkildə başla</span>
        <button className="TesteBasla">Testə başla</button>
        <button className="DahaEtrafli">Daha ətraflı</button>
      </div>

      <div className="area2">
        <img src="area2.png" />
        <strong>
          <span>9-cu sinif buraxılışı</span>
        </strong>
        <span>Pulsuz şəkildə başla</span>
        <button className="TesteBasla">Testə başla</button>
        <button className="DahaEtrafli">Daha ətraflı</button>
      </div>
      <div className="area3">
        <img src="area3.png" />
        <strong>
          <span>9-cu sinif buraxılışı</span>
        </strong>
        <span>Pulsuz şəkildə başla</span>
        <button className="TesteBasla">Testə başla</button>
        <button className="DahaEtrafli">Daha ətraflı</button>
      </div>
      <div className="area4">
        <img src="area4.png" />
        <strong>
          <span>9-cu sinif buraxılışı</span>
        </strong>
        <span>Pulsuz şəkildə başla</span>
        <button name="testebasla" className="TesteBasla">
          Testə başla
        </button>
        <button name="dahaetrafli" className="DahaEtrafli">
          Daha ətraflı
        </button>
      </div>
    </div>
  );
}
