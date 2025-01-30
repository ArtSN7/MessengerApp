import React from "react";
import "../styles/ChatWindow.css";

const ChatWindow = () => {
  return (
    <div className="chat-window">
      <div className="chat-messages">
        <p>Message 1</p>
        <p>Message 2</p>
        <p>Message 3</p>
      </div>
      <input type="text" placeholder="Type a message..." />
      <button>Send</button>
    </div>
  );
};

export default ChatWindow;

