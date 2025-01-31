// import 
const express = require('express');

const User = require('../models/Users');
const Message = require('../models/Messages');

const router = express.Router();



router.post('/main/:username', async (req, res) => {

    const userUsername = req.params.username;  // Extract parameter from URL

    // finding user in database
    try{

        const user = await User.findOne({ where: { username: userUsername } }); // Find user in database

        const messages = await Message.findAll({ where: { recipientId: user.id } }); // Find messages in database

        return res.status(200).json(messages); // return messages

    }catch(error){

        return res.status(401).json({error: error}); // if there is an error, return error message

    }
    
});

module.exports = router;