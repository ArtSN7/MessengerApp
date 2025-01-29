// import 
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/Users');

const router = express.Router();
const JWT_SECRET = process.env.JWT_KEY;


// Register

// using POST method as it is more secure comparing to GET
router.post('/signup', async (req, res) => {

    const { username, password, first_name, last_name, profile_picture } = req.body; // getting data from request body
    const hashedPassword = await bcrypt.hash(password, 10); // hashing password

    try {
        const user = await User.create({ username, password: hashedPassword, first_name, last_name, profile_picture });
        res.status(201).json({ message: 'User registered', user });

    } catch (error) {
        //res.status(400).json({ error: 'User registration failed - check authRoutes.js'});
        res.status(400).json({ error: error.message });
    }
});


// Login

// using POST method as it is more secure comparing to GET
router.post('/login', async (req, res) => {

    const { username, password } = req.body; // getting data from request body ( axios.post )

    try {
        const user = await User.findOne({ where: { username } });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user.id }, JWT_SECRET);
        res.json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
        //res.status(400).json({ error: 'Login failed - check authRoutes.js'});
    }
});

module.exports = router;