const express = require("express");
const Question = require('../models/quetions.js');
router = express.Router();

router.get("/question",async(req,res)=>{
    try {
        const quetions = await Question.find();
        res.send(quetions)
        .then(()=>{res.status(200);})
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;



