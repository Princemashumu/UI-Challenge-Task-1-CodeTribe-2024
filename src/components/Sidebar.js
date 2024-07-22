import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="SidebarContent">
      <div className="AboutContent">
        <div className="OverLappingImage">
          <div classname="overlappingImage">
            <img src="picture5.jpg" alt=""></img>
          </div>
        </div>
        <div className="AboutInfo"><p>We Help SaaS Companies<br></br>Overcome Product Design<br></br>Challanges. Every Single Day</p></div>
        <div className="MoreText"><p>More</p></div>
      </div>
      <div className="Objective">
        <div className="LastLogoInfo">
        <div className="logoDescription">
        <img src="brain_26px.png" alt="logo"></img>
        <div className="Descr">Minds</div></div>
        </div>
        <div className="LastAboutInfo"><p>Increase<br></br>Business On<br></br>Social Media<br></br>Reach</p></div>
      </div>
    </div>
  );
}

export default Sidebar;

// {/*  */}