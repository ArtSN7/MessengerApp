import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../styles/Signup.css" 
import error_check from '../data/error_check';

const Signup = () => {

    // states
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirm, setPasswordConfirm] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [profile_picture, setProfilePicture] = useState('');
    const [error, setError] = useState('');
    const timeoutRef = useRef(null);

    // navigation to redirect to another page
    const navigate = useNavigate();

    // function to handle login after submitting the form
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`http://localhost:5001/signup`, { username, password, password_confirm, first_name, last_name, profile_picture });

            localStorage.setItem('token', response.data.token);
            navigate('/main');

        } catch (error) {
            // Check the status code
            const statusCode = error.response.status;
            const errorMessage = error.response.data.message; // Adjust based on your API response

            // Call the error check function
            const isErrorMessage = error_check(statusCode, errorMessage);

            if (isErrorMessage) {
                navigate('/error');
            }
            else{
                setError( error.response.data.error );

                const element = document.getElementById("error_text");
                element.style.display = 'block';

                timeoutRef.current = setTimeout(() => {
                    element.style.display = 'none';
                    setError('');
                }, 1500);
            }
        }
    };

    return (
      <div className="container">
      <div className="signup-box">
        <h1 className="title">Agah</h1>
        <form className='signup-form' onSubmit={handleSubmit}>
          <input id='signup_username' type="text" placeholder="Username" className="input-field-signup" onChange={(e) => setUsername(e.target.value)} required />
          <input id='signup_password' type="password" placeholder="Password" className="input-field-signup" onChange={(e) => setPassword(e.target.value)} required />
          <input id='signup_password_confirm' type="password" placeholder="Confirm Password" className="input-field-signup" onChange={(e) => setPassword(e.target.value)} required />
          <input id='signup_first_name' type="text" placeholder="First Name" className="input-field-signup" onChange={(e) => setFirstName(e.target.value)} required />
          <input id='signup_last_name' type="text" placeholder="Last Name" className="input-field-signup" onChange={(e) => setLastName(e.target.value)} required />
          <input id='signup_profile_picture' type="text" placeholder="Profile Picture" className="input-field-signup" onChange={(e) => setProfilePicture(e.target.value)} required />

          <button type="submit" className="signup-button" onClick={handleSubmit}>Sign up</button>
        </form>
        <p className="signup-text" onClick={() => navigate('/login')}>Login</p>

        {error && <div id='error_text' className="error_text">{error}</div>}

      </div>
    </div>
    );
};

export default Signup;