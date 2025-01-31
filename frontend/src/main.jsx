import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login.jsx';
import Error from './components/Error.jsx';
import Signup from './components/Signup.jsx';
import Main from './components/Main.jsx';
import { AppProvider } from './context/AppContext';

const Root = () => {

    return (
        <AppProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/main/:username" element={<Main />} />
                    <Route path="*" element={<Error/>} />
                </Routes>
            </Router>
        </AppProvider>

    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);