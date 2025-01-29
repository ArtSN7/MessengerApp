import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import error_check from '../data/error_check';

const Error = ({ error }) => {
    return (
        <div>
            <h1>Error:</h1>
            <p>{error}</p>
        </div>
    );
};

export default Error;