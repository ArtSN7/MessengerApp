import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    // states
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // navigation to redirect to another page
    const navigate = useNavigate();

    // function to handle login after submitting the form
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`http://localhost:5001/login`, { username, password });

            localStorage.setItem('token', response.data.token);
            navigate('/chat');
        } catch (error) {
            setError('Error: ' + error.response.data.error || 'An error occurred');
        }
    };

    return (
        <div className="auth-form">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <p onClick={() => setIsLogin(!isLogin)}>    
                Need an account? Register here {href='/signup'}.
            </p>
        </div>
    );
};

export default Login;