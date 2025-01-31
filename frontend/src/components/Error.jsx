import React from 'react';
import {AppContext} from '../context/AppContext';
import ErrorIcon from '../assets/error_icon';

const Error = () => {
  const errorStyle = {
    backgroundColor: '#ffebee', // Light red background
    color: '#c62828', // Dark red text
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ef9a9a', // Light red border
    margin: '10px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const errorContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const {error} = React.useContext(AppContext);

  return (
    <div style={errorContainerStyle} className="error-container">
      <div style={errorStyle}>
        {error ? <p>{error.message}</p> : <p>No error message available.</p>}
      </div>
      <div className="error-icon">
        <ErrorIcon />
      </div>
    </div>
    
  );
};

export default Error;