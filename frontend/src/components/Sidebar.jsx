// Sidebar.js
import React from "react";
import "../styles/Sidebar.css";
import ProfileHeader from "./ProfileHeader";



// { conversations, onSelectConversation }

const Sidebar = ({username}) => {
  return (
    <div className="sidebar">
    <ProfileHeader username={username} />
    <div className="divider"></div>
    </div>
  );
};

export default Sidebar;
