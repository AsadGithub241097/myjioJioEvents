import "../EminentSpeakers/EminentSpeaker.css";
import React from "react";
import BGImage1 from "/Users/asad.mulla/Desktop/Jio Event /jioevent-mobile/src/EminentSpeakers/Eminent Speaker BG/1.png";
import BGImage2 from "/Users/asad.mulla/Desktop/Jio Event /jioevent-mobile/src/EminentSpeakers/Eminent Speaker BG/2.png";
import BGImage3 from "/Users/asad.mulla/Desktop/Jio Event /jioevent-mobile/src/EminentSpeakers/Eminent Speaker BG/3.png";
import BGImage4 from "/Users/asad.mulla/Desktop/Jio Event /jioevent-mobile/src/EminentSpeakers/Eminent Speaker BG/4.png";
import BGImage5 from "/Users/asad.mulla/Desktop/Jio Event /jioevent-mobile/src/EminentSpeakers/Eminent Speaker BG/5.png";
import BGImage6 from "/Users/asad.mulla/Desktop/Jio Event /jioevent-mobile/src/EminentSpeakers/Eminent Speaker BG/6.png";
const EminentSpeakers = () => {
  const EminentSpeakerCard1 = [
    {
      BGImg: BGImage1,
      name: "Abhijit Das",
      topic: "Asad",
    },
    {
      BGImg: BGImage2,
      name: "Enlin Quental",
      topic: "Asad",
    },
    {
      BGImg: BGImage3,
      name: "Asad Mulla",
      topic: "Asad",
    },
  ];

  const EminentSpeakerCard2 = [
    {
      BGImg: BGImage4,
      name: "Saurav Kendre",
      topic: "Asad",
    },
    {
      BGImg: BGImage5,
      name: "Prabha K",
      topic: "Asad",
    },
    {
      BGImg: BGImage6,
      name: "Sushmita Mondal",
      topic: "Asad",
    },
  ];

  return (
    <div className="EminentSpeakerMainDiv">
      <div className="EminentSpeakerHeading">
        <p>Eminent speakers on JioEvents</p>
      </div>
      <div className="EminentSpeakerRow1">
        {EminentSpeakerCard1.map((item) => (
          <div
            className="CardsRow1"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url(${item.BGImg})`,
            }}
          >
            <div className="EminentSpeakerTopicName">
              <p className="p1">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="EminentSpeakerRow1">
        {EminentSpeakerCard2.map((item) => (
          <div
            className="CardsRow1"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url(${item.BGImg})`,
            }}
          >
            <div className="EminentSpeakerTopicName">
              <p className="p1">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EminentSpeakers;
