import React, { useState } from 'react';
import './styles.css'; // Import the CSS file
import profile from '../images/profile.png';
import scroll from '../images/mouse.png';
import Chair2 from '../images/chair2.png';
import OrangeVelvetChair from "../images/OrangeVelvetChair1.png";
import roofLamb from "../images/roofLamb.jpg";
import { FaBars } from "react-icons/fa"; // Import a hamburger icon from react-icons

function MainContent() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className='wrapper'>

    
    <div className="container">
      <div className="content">
        {/* Header */}
        <header className="app-bar">
          <div className="toolbar">
            <h1 className="title">Medora</h1>
            <nav className={`nav ${isNavOpen ? "nav-open" : ""}`}>
              <div className='nav1'>
                <a href="/About-us">About us</a>
                <a href="/Furniture">Furniture</a>
              </div>
              <div className='nav2'>
                <a href="/Our-Stores">Our Stores</a>
                <a href="/Blog">Blog</a>
                <img alt='icon' src={profile} />
              </div>
            </nav>
            <FaBars className="hamburger" onClick={toggleNav} /> {/* Hamburger Icon */}
          </div>
        </header>

        {/* Main Content */}
        <div className="main-content">
          {/* Left Section */}
          <div className="left-section">
            <h1>Mid Century</h1>
            <h2>Modern Furniture</h2>
            <p>Modern high quality and <br />comfortable available in our stores.</p>
            <button className="discover-button">Discover Now</button>
          </div>

          {/* Right Section: Grid of Images */}
          <div className="right-section">
            <div className='image-item chair2'>
              <img src={Chair2} alt="Stylish Metal Chair" />
            </div>
            <div className="image-item orange">
              <img src={OrangeVelvetChair} alt="Stylish Metal Chair" />
              <h1>01.</h1><br /><h3>Stylish Metal Chair</h3>
              <p>Chair with minimal style and modern wooden and plastic material.</p>
            </div>
            <div className="image-item blue">
              <img src={roofLamb} alt="Roof Lamp Lightings" />
              <h1>02.</h1><br /><h3> Roof Lamp Lightings</h3>
              <p>Roof light and lamps in all colors and available in a wide range.</p>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="scroll-indicator">
          <p>Scroll Down</p>
          <img alt='scroll' src={scroll} />
        </div>
      </div>
    </div>
    </div>
  );
}

export default MainContent;
