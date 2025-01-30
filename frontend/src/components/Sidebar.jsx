// Sidebar.js
import React from "react";
import "../styles/Sidebar.css";
import ProfileHeader from "./ProfileHeader";



// { conversations, onSelectConversation }

const Sidebar = () => {
  return (
    <div className="sidebar">
    <ProfileHeader />
    <div class="divider"></div>
    </div>
  );
};

export default Sidebar;
