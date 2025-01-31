import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';
import { AppContext } from '../context/AppContext';
import "../styles/Main.css";
import axios from 'axios';
import error_check from '../data/error_check';

const Main = () => {
    const { username } = useParams(); // Extract username from URL parameters
    const { setUsername, messages, setMessages } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        setUsername(username); // Set the username in context

        const fetchMessages = async () => {
            try {

                const response = await axios.post(`http://localhost:5001/main/${username}`);
                setMessages(response.data);

            } catch (error) {

                    navigate('/error');

            }
        };

        fetchMessages(); // call the function to fetch messages
    }, [username, setUsername, setMessages, navigate]);

    return (
        <div className="main-container">
            <Sidebar className="sidebar" />
            <ChatWindow messages={messages} className="chat-window" />
        </div>
    );
};

export default Main;