import React from "react";
import { FaCog } from "react-icons/fa";
import "../styles/ProfileHeader.css"; 

const ProfileHeader = ({username}) => {
  return (
    <div className="profile-header">

      <div className="profile-info">

        <div className="profile-picture">
          <img className="avatar" src="https://picsum.photos/200" />
        </div>

        <div className="text-section">
          <p className="name">{username}</p>
        </div>

      </div>

      <div className="icons">
        <FaCog />
      </div>

    </div>
  );
};

export default ProfileHeader;
