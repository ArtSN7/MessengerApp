import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';
import { AppContext } from '../context/AppContext';
import "../styles/Main.css";
import axios from 'axios';

const Main = async () => {
    const { username } = useParams(); // Extract username from URL parameters
    const { setUsername, messages, setMessages } = useContext(AppContext);

    useEffect(() => {
        setUsername(username); // Set the username in context

        const fetchMessages = async () => {
            try {

                const response = await axios.post(`http://localhost:5001/main/${username}`);
                setMessages(response.data);

            } catch (error) {

                const statusCode = error.response.status;
                const errorMessage = error.response.data.message; // Adjust based on your API response

                // Call the error check function
                const isErrorMessage = error_check(statusCode, errorMessage);

                if (isErrorMessage) {
                    navigate('/error');
                } else {
                    setError(error.response.data.error);
                }
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