import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';
import "../styles/Main.css";

const Main = () => {
    return (   
        <div className="main-container">
            <Sidebar className="sidebar" />
            <ChatWindow className="chat-window" />
        </div>
    );
};

export default Main;