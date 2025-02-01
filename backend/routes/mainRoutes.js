// import 
const express = require('express');

const User = require('../models/Users');
const Message = require('../models/Messages');
const axios = require('axios');

const router = express.Router();



router.get('/main/:username', async (req, res) => {

    console.log("TEST 1")

    const userUsername = req.params.username;  // Extract parameter from URL

    console.log("TEST 2")

    // finding user in database
    try{

        console.log("TEST 3")

        const user = await User.findOne({ where: { username: userUsername } }); // Find user in database

        console.log("TEST 4")

        const messages = await Message.findAll({ where: { recipientId: user.id } }); // Find messages in database

        console.log("TEST 5")

        return res.status(200).json(messages); // return messages

    }catch(error){

        console.log(error);

        console.log("TEST 6")

        return res.status(401).json({error: error}); // if there is an error, return error message

    }
    
});

module.exports = router;