const express = require('express');

const router = express.Router();
const user = require('../models/User');
const { body, validationResult } = require('express-validator');
const jwt=require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const jwtSecret = "abcdefghijklmnopqrstuvwxyz123456";

router.post("/createuser", [body('email').isEmail(),
body('name').isLength({ min: 5 }),
body('password').isLength({ min: 5 })], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const salt=await bcrypt.genSalt(10)
    let secPassword= await bcrypt.hash(req.body.password, salt);


    try {
        const newUser = await user.create({
            name: req.body.name,
            email: req.body.email,
            password: secPassword,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            phone: req.body.phone
        });
        res.json({ success: true, user: newUser });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

router.post("/loguser", [body('email').isEmail(),
body('password').isLength({ min: 5 })], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let email= req.body.email;
    try {
        let userData = await user.findOne({email});
        if(!userData){
            return res.status(400).json({ errors:"Try logging in with correct credentials" });
        }
        const isMatch = await bcrypt.compare(req.body.password, userData.password);
        if(!isMatch){
            return res.status(400).json({ errors:"Try logging in with correct credentials" });
        }
        const data={
            user:{
                id:userData.id
            }
        }
        const authToken =jwt.sign(data,jwtSecret)
        return res.json({ success: true, authToken:authToken });
        }   

        catch (error) {
            console.error(error);
            res.status(500).json({ success: false});
        }
    });

module.exports = router;