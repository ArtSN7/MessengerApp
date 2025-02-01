import React from "react";
import "../styles/ChatWindow.css";

const ChatWindow = ({ messages  }) => {

  console.log(messages);
  
  return (
    <div className="chat-window">
      <div className="chat-messages">
        <p>Display messages here</p>
      </div>
      <input className="chat-input" type="text" placeholder="Type a message..." />
      <button className="chat-button">Send</button>
    </div>
  );
};

export default ChatWindow;

