import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [username, setUsername] = useState('');
    const [messages, setMessages] = useState([]);

    return (
        <AppContext.Provider value={{ username, setUsername, messages, setMessages }}>
            {children}
        </AppContext.Provider>
    );
};