import React from "react";
import "./PostingSide.scss";
import cover from "../../images/profile.jpg";
import profile from "../../images/tree.jpg";

function PostSide() {
  return (
    <div className="profileCardWithBackground">
      <div className="profileCard">
        <div className="profileImages">
          <img src={profile} alt="cover" />
          <img src={cover} alt="cover" />
        </div>
        <div className="bio">
          <b>Nellen mokoena</b>
          <span>Software Engineer</span>
        </div>
        <hr />
        <div className="folowcard">
          <div className="folowers">
            <b>6,890</b>
            <span>Following</span>
          </div>
          <div className="v1"></div>
          <div className="folowers">
            <b>890</b>
            <span>Followers</span>
          </div>
          <div className="v1"></div>
          <div className="folowers">
            <b>3</b>
            <span>Posts</span>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default PostSide;
