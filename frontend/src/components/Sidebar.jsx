// Sidebar.js
import React from "react";
import "../styles/Sidebar.css";
import ProfileHeader from "./ProfileHeader";
import MessagesSidebar from "./MessagesSidebar";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Sidebar = () => {
  const { username, messages } = useContext(AppContext);
  
  console.log(username);
  console.log(messages);

  return (
    <div className="sidebar">
      <ProfileHeader username={username} />
      <div className="divider"></div>
      <MessagesSidebar messages={messages} />
    </div>
  );
};

export default Sidebar;
