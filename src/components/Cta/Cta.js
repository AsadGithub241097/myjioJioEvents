import React from "react";
import "/Users/asad.mulla/Desktop/Jio Event /jioevent-mobile/src/components/Cta/Cta.css";
import ar from "/Users/asad.mulla/Desktop/Jio Event /jioevent-mobile/src/components/Cta/ic_arrow_next.svg";
const Cta = () => {
  return (
    <div className="cta">
      <div className="ctaTile">
        <p className="CtaTopic">Got exciting events? MyJio is waiting!</p>
        <div className="ContactUs">
          <p className="contactustext">Contact us to list your event</p>
          <img className="Arrowdiv" src={ar} />
        </div>
      </div>
    </div>
  );
};

export default Cta;
