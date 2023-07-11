import React from "react";
import Image from "../images/profile.png";
import "./Profile.css";


const Profile = ({ theme, mode }) => {
  return (
    <>
      <div
        className="profile py-5"
        id="profile"
        style={{ backgroundColor: mode == "0" ? "rgb(50, 49, 49)" : "#F1F1F1" }}
      >
        <div className="container py-5 ">
          <div className="profile-image">
            <img src={Image} />
          </div>
          <br />
          <div className="profile-name" style={{ color: theme }}>
            I'm Kaushan Dutta
          </div>
          <br />
          <div
            className="profile-detail"
            style={{ color: mode == "0" ? "#fff" : "rgb(37, 36, 36)" }}
          >
            I am currently pursuing BTech degree in Computer Science Engineering
            and have a keen urge in exploring Web3.0. I have specially worked on
            MERN stack development and now learning Blockchain development.
            Being a tech enthusiast I always try to work along with community
            where I can learn and explore new technologies.
            Scroll down to know more about me!!
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default Profile;
