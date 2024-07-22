import "./Body.css";

function Body() {
  return (
    <div className="BodyContent">
      <div className="DigitalClass">
        <div className="GetText">
          <strong>
            A Digital <br></br>Creative Agency
          </strong>
        </div>
        <div className="GetInfo">
          <p>
            We work on a diverse range of projects, from helping<br></br>
            startups get their business up.
          </p>
        </div>
        <div className="DigitalRing">
          <div className="GetMore">
            <button>Get's More</button>
          </div>
          <div className="Ring">
            <img src="RING.jpg" alt="ring"></img>
          </div>
        </div>
      </div>
      <div className="MindsClass">
        <div className="lessTime">
          <div className="lessText">
            <h1>
              2x <br></br>
              <p>less time</p>
            </h1>
          </div>
        </div>
        <div className="cutBy">
          <p>Spent on Development-Ready Design</p>
        </div>
        <div className="DevelopmentTime">
          <h1>30%</h1>
        </div>
        <div className="TimeOn">
          <p>Time on new Design Delivery</p>
        </div>
      </div>
      <div className="TimeClass">
        <div className="MindClassChild">
        <img src="brain_26px.png" alt="logo"></img>
        <p>Minds</p>
          <div className="LogoText">
            
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
