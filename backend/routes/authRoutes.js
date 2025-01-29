// import 
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/Users');

const router = express.Router();
const JWT_SECRET = process.env.JWT_KEY;

// using POST method as it is more secure comparing to GET

// Register

router.post('/signup', async (req, res) => {

    const { username, password, password_confirm, first_name, last_name, profile_picture } = req.body; // getting data from request body

    if (!username || !password || !password_confirm || !first_name || !last_name) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    if (password !== password_confirm) {
        return res.status(400).json({ error: 'Passwords do not match' });
    }


    const hashedPassword = await bcrypt.hash(password, 10); // hashing password

    try {
        const user = await User.create({ username, password: hashedPassword, first_name, last_name, profile_picture });
        res.status(201).json({ message: 'User already registered', user });

    } catch (error) {
        res.status(333).json({ error: error.message }); 
    }
});


// Login

router.post('/login', async (req, res) => {

    const { username, password } = req.body; // getting data from request body ( axios.post )

    if (!username || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const user = await User.findOne({ where: { username } }); // get the user from the DB

        if (!user || !(await bcrypt.compare(password, user.password))) { // check the password
            return res.status(401).json({ error: 'Check your password' }); // if passwords don't match, error is returned
        }
        // otherwise, the user is logged in
        const token = jwt.sign({ userId: user.id }, JWT_SECRET);
        res.json({ token });

    } catch (error) {
        res.status(301).json({ error: error.message });
    }
});

module.exports = router;