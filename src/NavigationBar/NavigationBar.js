import React from "react";
import "./NavigationBar.css";
import Home from "/Users/asad.mulla/Desktop/Jio Event /jioevent-mobile/src/NavigationBar/NavigationBarIcon/ic_home.svg";
import Shorts from "/Users/asad.mulla/Desktop/Jio Event /jioevent-mobile/src/NavigationBar/NavigationBarIcon/ic_video_size.svg";
import Channels from "/Users/asad.mulla/Desktop/Jio Event /jioevent-mobile/src/NavigationBar/NavigationBarIcon/ic_webseries.svg";
import Profile from "/Users/asad.mulla/Desktop/Jio Event /jioevent-mobile/src/NavigationBar/NavigationBarIcon/ic_profile_male.svg";
const NavigationBar = () => {
  return (
    <div>
      <div className="NavigationBarMainDiv">
        <div className="HomeSVG">
          <img src={Home} />
          <p className="TxtCss">Home</p>
        </div>
        <div className="Shorts">
          <img src={Shorts} />
          <p className="TxtCss">Shorts</p>
        </div>
        <div className="Channels">
          <img src={Channels} />
          <p className="TxtCss">Channels</p>
        </div>
        <div className="Profile">
          <img src={Profile} />
          <p className="TxtCss">Profile</p>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
