import "../EventsYouMightHaveMissed/EventsYouMightHaveMissed.css";
import ECU1 from "../Events _Coming_Up/EventsComingUpBackground/ECU1.jpg";
import ECU2 from "../EventsYouMightHaveMissed/Background/party.jpeg";
import ArrowButton from "../Events _Coming_Up/ArrowButtonECP/Arrow Button 1.svg";
import React from "react";

const EventsYouMightHaveMissed = () => {
  const EYMHMCards = [
    { background: ECU1, date: "Jan 14", topic: "Asad" },
    { background: ECU2, date: "Feb 20", topic: "Asad" },
    {},
  ];
  return (
    <div className="EYMHMMainDiv">
      <div className="HeadingSection">
        <p className="HeadingPara">Events you might have missed</p>
        <a className="ViewAllLink">View All</a>
      </div>
      <div className="EventsComingUpTiles">
        {EYMHMCards.map((item) => (
          <div
            className="ECUMainDiv"
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              "background-image": `url(${ECU2})`,
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

export default EventsYouMightHaveMissed;
