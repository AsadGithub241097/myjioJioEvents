import "../Browsethroughchannels/BrowseThroughChannels.css";
import BTCBG1 from "../Browsethroughchannels/BTCImages/5.png";
import BTCBG2 from "../Browsethroughchannels/BTCImages/4.png";
import BTCBG3 from "../Browsethroughchannels/BTCImages/3.png";
import BTCBG4 from "../Browsethroughchannels/BTCImages/2.png";
import BTCBG5 from "../Browsethroughchannels/BTCImages/1.png";

// importing fev and arrow button

import Fev from "../Browsethroughchannels/BTCIcons/Fev.svg";
import BWArrow from "../Browsethroughchannels/BTCIcons/BWArrow.svg";

import React from "react";

const BrowseThroughChannels = () => {
  return (
    <div className="BTCMainDiv">
      <div className="BTCHeadingSection">
        <p className="BTCHeadingPara">Browse through channels</p>
        <a className="ViewAllLink">View All</a>
      </div>

      <div className="BTCTiles">
        <div
          className="Tile1"
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            "background-image": `url(${BTCBG1})`,
          }}
        >
          <div className="FevIcon">
            <img src={Fev} />
          </div>
          <div className="BWArrowIcon">
            <img src={BWArrow} />
          </div>
        </div>
        <div
          className="Tile2"
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            "background-image": `url(${BTCBG4})`,
          }}
        >
          <div className="FevIcon">
            <img src={Fev} />
          </div>
          <div className="BWArrowIcon">
            <img src={BWArrow} />
          </div>
        </div>
        <div
          className="Tile3"
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            "background-image": `url(${BTCBG5})`,
          }}
        >
          <div className="FevIcon">
            <img src={Fev} />
          </div>
          <div className="BWArrowIcon">
            <img src={BWArrow} />
          </div>
        </div>
        <div
          className="Tile4"
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            "background-image": `url(${BTCBG3})`,
          }}
        >
          <div className="FevIcon">
            <img src={Fev} />
          </div>
          <div className="BWArrowIcon">
            <img src={BWArrow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseThroughChannels;
