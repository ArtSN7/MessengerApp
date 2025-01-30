import React from "react";
import { FaUser, FaCog } from "react-icons/fa";
import "../styles/ProfileHeader.css"; 

const ProfileHeader = () => {
  return (
    <div className="profile-header">
      {/* Left Section */}
      <div className="profile-info">
        <div className="profile-picture"></div>

        <div className="text-section">
          <p className="greeting">Hello</p>
          <p className="name">Billy S.</p>
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
