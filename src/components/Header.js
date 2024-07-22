import "./Header.css";

function Header() {
  return (

    
    <div className="NavigationBar">
      <div className="LogoClass">
        <div className="logoDescr">
        <img src="brain_26px.png" alt="logo"></img>
        <div className="Descr">Minds</div></div>
        
      </div>
      <div className="MenuClass">

                <div className="Home"><div href="#">Home</div></div>
                <div className="About"><div href="#">Aboout</div></div>
                <div className="Blog"><div href="#">Blog</div></div>
                <div className="Jobs"><div href="#">Jobs</div></div>

      </div>

      <div className="AccountClass">
        <button class="button button1">Your Account</button>
      </div>
    </div>

  );
}
export default Header;
