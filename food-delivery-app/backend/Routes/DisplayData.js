const express = require('express');

const router = express.Router();

router.post('/foodData', (req, res) => {
    try {
        
        if (!global.food_items || !global.food_category) {
            res.status(500).send("Data not initialized");
        } else {
            res.send([global.food_items, global.food_category]);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong");
    }
});

module.exports = router;
