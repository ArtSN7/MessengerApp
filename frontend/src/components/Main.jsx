import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';
import { AppContext } from '../context/AppContext';
import "../styles/Main.css";

const Main = () => {
    const { username } = useParams(); // Extract username from URL parameters
    const { setUsername, messages, setMessages } = useContext(AppContext);

    useEffect(() => {
        setUsername(username); // Set the username in context

        const fetchMessages = async () => {
            try {
                const response = await fetch(`/main/${username}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                setMessages(data);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };

        fetchMessages();
    }, [username, setUsername, setMessages]);

    return (
        <div className="main-container">
            <Sidebar className="sidebar" />
            <ChatWindow messages={messages} className="chat-window" />
        </div>
    );
};

export default Main;