import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {

    // states
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // navigation to redirect to another page
    const navigate = useNavigate();

    // function to handle login after submitting the form
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`http://localhost:5001/login`, { username, password });

            localStorage.setItem('token', response.data.token);
            navigate('/main');
        } catch (error) {
            setError( error.response.data.error );
        }
    };

    return (
        <StyledWrapper>
            <form className="form" onSubmit={handleSubmit}>
                <span className="input-span">
                    <label htmlFor="username" className="label">Username</label>
                    <input type="text" name="username" id="username" onChange={(e) => setUsername(e.target.value)} /></span>
                <span className="input-span">
                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} /></span>
                <span className="span"><a href="#">Forgot password?</a></span>
                <input className="submit" type="submit" defaultValue="Log in" onClick={handleSubmit} />
                <span className="span">
                    Don't have an account? 
                    <button type="button" onClick={() => navigate('/signup')}>Sign up</button>
                </span>
              </form>
            </StyledWrapper>
          );
};

export default Login;



const StyledWrapper = styled.div`
  .form {
    --bg-light: #efefef;
    --bg-dark: #707070;
    --clr: #58bc82;
    --clr-alpha: #9c9c9c60;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
    max-width: 300px;
  }

  .form .input-span {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form input[type="text"],
  .form input[type="password"] {
    border-radius: 0.5rem;
    padding: 1rem 0.75rem;
    width: 100%;
    border: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: var(--clr-alpha);
    outline: 2px solid var(--bg-dark);
  }

  .form input[type="text"]:focus,
  .form input[type="password"]:focus {
    outline: 2px solid var(--clr);
  }

  .label {
    align-self: flex-start;
    color: var(--clr);
    font-weight: 600;
  }

  .form .submit {
    padding: 1rem 0.75rem;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 3rem;
    background-color: var(--bg-dark);
    color: var(--bg-light);
    border: none;
    cursor: pointer;
    transition: all 300ms;
    font-weight: 600;
    font-size: 0.9rem;
  }

  .form .submit:hover {
    background-color: var(--clr);
    color: var(--bg-dark);
  }

  .span {
    text-decoration: none;
    color: var(--bg-dark);
  }

  .span a {
    color: var(--clr);
  }`;

