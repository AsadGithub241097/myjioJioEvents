import React from "react";
import "./HeaderCss.css";
import SwipMe from "./HeaderIcons/Swap me.svg";
import EventIcon from "./HeaderIcons/Icon.svg";
import Bg from "./HeaderIcons/BG.svg";
import SearchIcon from "./HeaderIcons/ic_search.svg";
import QRCode from "./HeaderIcons/QRCode.svg";
import BellIcon from "./HeaderIcons/BellIcon.svg";
const header = () => {
  return (
    <div className="JioEventHeader">
      <img className="Logo" src={SwipMe} />
      <div className="EventLogo">
        <img className="EventIcon" src={EventIcon} />
        <p className="EventText">Event</p>
        <div className="test">
          <img className="SearchIcon" src={SearchIcon} />
          <img className="QRCoder" src={QRCode} />
          <img className="BellIcon" src={BellIcon} />
        </div>
      </div>
    </div>
  );
};
export default header;
