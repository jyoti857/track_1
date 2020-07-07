const express =  require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User  = mongoose.model('User');
const jwt = require('jsonwebtoken');

router.post('/signup', async(req, res) => {
    const {email, password} = req.body;
    const user = new User({email, password});
    try{
        await user.save();
        const token = jwt.sign({userId: user._id}, "jyotiLuckie");
        console.log(email, password, token);
        res.status(201).json({"token":token});
    }catch(err){
        return res.status(422).send(err.message);
    }
});

module.exports = router;