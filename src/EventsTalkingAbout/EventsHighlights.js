import "./EventsHighlights.css";
import React from "react";
import b1 from "../EventsTalkingAbout/Background/1stBG.png";
import b2 from "../EventsTalkingAbout/Background/2ndBG.png";
import Arrow from "../EventsTalkingAbout/Arrow Button/ic_arrow_next.svg";

const EventsHighlights = () => {
  const EventsHighlightsCards = [
    { background: b1, date: "Jan 14", topic: "Asad" },
    { background: b2, date: "Feb 20", topic: "Asad" },
    {},
  ];
  return (
    <div className="EventsHighlightsMainDiv">
      <div className="EventsHighlightsTopic">
        <p className="Heading">Events people are talking about!</p>
        <a className="ViewAllLink">View All</a>
      </div>
      <div className="EventHCArray">
        {EventsHighlightsCards.map((item) => (
          <div
            className="IndividualCards"
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              "background-image": `url(${b1})`,
            }}
          >
            <div className="DateDiv">
              <div className="Month">NOV</div>
              <div className="Date">14</div>
            </div>
            <div className="CardDiscription">
              <div className="CardDiscriptionFont">
                <p className="CDF">Hi Everyone need to discuss something</p>
              </div>
              <div className="EventOrgnizer">
                <div className="EOName">
                  <p>Asad Mulla</p>
                </div>
                <div className="ArrowButtonDiv">
                  <img src={Arrow} />
                </div>
              </div>
            </div>

            {/* <p className="EHTName">{item.topic}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsHighlights;
