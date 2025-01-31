import React from "react";
import "../styles/ChatWindow.css";

const ChatWindow = ({ messages  }) => {
  return (
    <div className="chat-window">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className="chat-message">
            <div className="chat-message-content">{message.content}</div>
            <div className="chat-message-time">{message.time}</div>
          </div>
        ))}
      </div>
      <input className="chat-input" type="text" placeholder="Type a message..." />
      <button className="chat-button">Send</button>
    </div>
  );
};

export default ChatWindow;

