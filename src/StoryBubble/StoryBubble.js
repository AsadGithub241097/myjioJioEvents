import React from "react";
import "./StoryBubble.css";
import p1 from "../StoryBubble/ProfilePic/p1.png";
import p2 from "../StoryBubble/ProfilePic/p2.png";
import p3 from "../StoryBubble/ProfilePic/p3.png";
import p4 from "../StoryBubble/ProfilePic/p4.png";
import p5 from "../StoryBubble/ProfilePic/p2.png";
import p6 from "../StoryBubble/ProfilePic/p1.png";

const StoryBubble = () => {
  const UserProfileDP = [
    { pic: p1, name: "Abhijit Das" },
    { pic: p2, name: "Dhiraj" },
    { pic: p3, name: "Asad" },
    { pic: p4, name: "Dakshitha" },
    { pic: p5, name: "Susmita " },
    { pic: p6, name: "Kriti Aditi" },
  ];
  return (
    <div className="StoryBubbleMainDiv">
      {UserProfileDP.map((item) => (
        <div>
          <img className="ProfileStory" src={item.pic} />
          <p className="ProfileName">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default StoryBubble;
