import React, { useState, useRef, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../styles/Login.css" 
import error_check from '../data/error_check';
import { AppContext } from '../context/AppContext';

const Login = () => {

    // states
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const timeoutRef = useRef(null);
    // navigation to redirect to another page
    const navigate = useNavigate();

    const { setUsername: setGlobalUsername, setError: setGlobalError } = useContext(AppContext);

    // function to handle login after submitting the form
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          const response = await axios.post(`http://localhost:5001/login`, { username, password });
  
          localStorage.setItem('token', response.data.token);
          setGlobalUsername(username);
          navigate(`/main/${username}`);
  
        } catch (error) {
          if (error.response) {
              const statusCode = error.response.status;
              const errorMessage = error.response.data.error || "An error occurred";
              
              const isErrorMessage = error_check(statusCode, errorMessage);
  
              if (isErrorMessage) {
                  setGlobalError(errorMessage);
                  navigate('/error');
              } else {
                  setError(errorMessage);
                  const element = document.getElementById("error_text");
                  if (element) {
                      element.style.display = 'block';
                      setTimeout(() => {
                          element.style.display = 'none';
                          setError('');
                      }, 1500);
                  }
              }
          } else {
              console.error("Login request failed:", error);
              setError("Network error or server unavailable.");
          }
      }
    };

    return (
      <div className="container">
      <div className="login-box">
        <h1 className="title">Agah</h1>
        <form className='login-form' onSubmit={handleSubmit}>
          <input id='login_username' type="text" placeholder="Login" className="input-field-login" onChange={(e) => setUsername(e.target.value)} required />
          <input id='login_password' type="password" placeholder="Password" className="input-field-login" onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className="login-button" onClick={handleSubmit}>Log in</button>
        </form>
        <p className="signup-text" onClick={() => navigate('/signup')}>Sign up</p>
        {<div id='error_text' className="error_text">{error}</div>}
      </div>
    </div>
    );
};

export default Login;

