import React from "react";
import { FaUser, FaCog } from "react-icons/fa";
import "../styles/ProfileHeader.css"; 

const ProfileHeader = ({username}) => {
  return (
    <div className="profile-header">
      {/* Left Section */}
      <div className="profile-info">
        <div className="profile-picture"></div>

        <div className="text-section">
          <p className="name">{username}</p>
        </div>
      </div>

      {/* Icons */}
      <div className="icons">
        <FaUser />
        <FaCog />
      </div>
    </div>
  );
};

export default ProfileHeader;
