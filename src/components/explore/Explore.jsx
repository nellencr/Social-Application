import React from "react";
import "./Explore.scss";
import profile from "../../images/profile.jpg";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

function Explore() {
  return (
    <div className="explore">
      <div className="prof">
        <img src={profile} alt="profile" />
        <div>
          <input type="text" placeholder="What is happening" />
        </div>
      </div>
      <div className="options">
        <div className="option" style={{ color: "#4CB256 " }}>
          <UilScenery />
          Photo
        </div>
        <div className="option" style={{ color: "#4A4EB7" }}>
          <UilPlayCircle />
          video
        </div>
        <div className="option" style={{ color: "#EF5757" }}>
          <UilLocationPoint />
          Location
        </div>
        <div className="option" style={{ color: "#E1AE4A" }}>
          <UilSchedule />
          Shedule
        </div>
        <button className="button ps-button">Share</button>
      </div>
    </div>
  );
}

export default Explore;
