import "../Events _Coming_Up/EventsComingUp.css";
import React from "react";
import ECU1 from "../Events _Coming_Up/EventsComingUpBackground/ECU1.jpg";
import ECU2 from "../Events _Coming_Up/EventsComingUpBackground/ECU2.jpg";
import ECU3 from "../Events _Coming_Up/EventsComingUpBackground/ECU3.jpg";
import ArrowECU from "../Events _Coming_Up/ArrowButtonECP/ic_arrow_next.svg";
import ArrowButton from "../Events _Coming_Up/ArrowButtonECP/Arrow Button 1.svg";

const EventsComingUp = () => {
  const EventsComingUpCards = [
    { background: ECU1, date: "Jan 14", topic: "Asad" },
    { background: ECU2, date: "Feb 20", topic: "Asad" },
    {},
  ];
  return (
    <div className="EventsComingUpMainDiv">
      <div className="HeadingSection">
        <p className="HeadingPara">Events coming up</p>
        <a className="ViewAllLink">View All</a>
      </div>
      <div className="EventsComingUpTiles">
        {EventsComingUpCards.map((item) => (
          <div
            className="ECUMainDiv"
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              "background-image": `url(${ECU1})`,
            }}
          >
            <div className="ECUDateDIV">
              <div className="Month">NOV</div>
              <div className="Date">14</div>
            </div>
            <div className="ECUCardDiscription">
              <div className="ECUCardDiscriptionFont">
                <p className="ECU">Hi Everyone need to discuss</p>
              </div>
              <div className="ECUOrgnizer">
                <div className="ECUEOName">
                  <p>Asad Mulla</p>
                </div>
                <div className="ArrowButtonDiv">
                  <img className="Arrow" src={ArrowButton} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsComingUp;
