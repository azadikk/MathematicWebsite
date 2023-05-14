import "./Box2.css";

export default function Box2() {
  return (
    <div className="Box2">
      <strong>
        <span className="span1">İmtahana giriş</span>
      </strong>
      <span className="span2">
        MathQuiz vasitəsi ilə imtahana başlayarkən bir neçə <br />
        addımlardan keçirsiniz
      </span>
      <div className="images">
        
        <span className="step1-items">
          <img id="user" src="user.png" />
          <button className="step1">Step 1</button>
        </span>

        <span className="step2-items">
          <img id="clock" src="clock.png" />
          <button className="step2">Step 2</button>
        </span>

        <span className="step3-items">
        <img id="vector" src="Vector.png" />
        <button className="step3">Step 3</button>
        </span>
      
      </div>
    </div>
  );
}
