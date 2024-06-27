const express = require('express');

const router = express.Router();
const user = require('../models/User');
const {body, validationResult} = require('express-validator');



router.post("/createuser",[body('email').isEmail(),
body('name').isLength({ min: 5 }),
body('password').isLength({ min: 5 })], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newUser = await user.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
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

module.exports = router;