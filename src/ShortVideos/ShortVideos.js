import React from "react";
import "./ShortVideos.css";

const ShortVideos = () => {
  const UserShortsVideo = [
    {
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      discription: "Wellcome ewskuajdh ekujwshmad",
    },
    {
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      discription: "Wellcome",
    },
    {
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      discription: "Wellcome",
    },
    {
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      discription: "Wellcome",
    },
  ];
  return (
    <div className="ShortVideo">
      <div>
        <div className="ShortVideoTitle">
          <p>Events’ sneak peak</p>
          <a className="ViewAllLink">View All</a>
        </div>
      </div>
      <div className="VideoDiv">
        {UserShortsVideo.map((item) => (
          <div className="videoParent">
            <video
              playsInline
              autoPlay
              loop
              muted
              className="VideoTile"
              src={item.video}
            />
            <p className="VideoDiscription">{item.discription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortVideos;
