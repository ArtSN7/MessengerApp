import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';
import { AppContext } from '../context/AppContext';
import "../styles/Main.css";
import axios from 'axios';


const Main = () => {
    const { username } = useParams(); // Extract username from URL parameters
    const { setUsername, messages, setMessages, error, setError } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        setUsername(username); // Set the username in context

        const fetchMessages = async () => {
            try {

                console.log("TEST 7")
                const response = await axios.post(`http://localhost:5001/main/${username}`); // ISSUE HERE

                console.log("TEST 8")
                setMessages(response.data);

            } catch (error) {

                setError(error);
                console.log(error);
                navigate('/error');

            }
        };

        fetchMessages(); // call the function to fetch messages
    }, [username, setUsername, setMessages, setError, navigate]);

    return(
        <p>MAIN</p>
    )

    /*/ return (
        <div className="main-container">
            <Sidebar username={username} className="sidebar" />
            <ChatWindow messages={messages} className="chat-window" />
        </div>
    ); */
};

export default Main;