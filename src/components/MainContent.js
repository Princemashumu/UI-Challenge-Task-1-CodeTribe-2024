import React from 'react';
import '../components/MainContent.css';
import OrangeVelvetChair from '../OrangeVelvetChair.jpg';
import GreyVelvetChair from '../greyvelvetchair.jpg';
import Lamp from '../roofLamb.jpg'; // Fixed the image name from "lamb" to "Lamp"

const MainContent = () => {
    return (
        <div className="main-content">
            <div className="left-panel">
                <h1>Mid Century <br /><span>Modern Furniture</span></h1>
                <p>Modern high quality and comfortable available on our stores</p>
                <button className="btn-discover">Discover Now</button>
                <div className="scroll-down">Scroll Down</div>
            </div>
            <div className="right-panel">
                <div className="item">
                    <img src={OrangeVelvetChair} alt="Stylish Metal Chair" />
                    <div className="item-description">
                        <h2>01.</h2>
                        <h3>Stylish Metal Chair</h3>
                        <p>Chair with minimal style and modern Wooden and plastic material</p>
                    </div>
                </div>
                <div className="item">
                    <img src={Lamp} alt="Roof Lamp Lightings" />
                    <div className="item-description">
                        <h2>02.</h2>
                        <h3>Roof Lamp Lightings</h3>
                        <p>Roof light and lamps we have wide range in all colors and lamps also available</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
