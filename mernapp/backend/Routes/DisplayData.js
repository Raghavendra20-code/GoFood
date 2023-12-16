const express = require('express');
const router = express.Router();
const foodItems = require('../model/foodItems')
const foodCategory = require('../model/foodCategory')

router.post('/foodData',async (req,res)=>{
    const foodItem =  await foodItems.find({});
    const foodCategorys = await foodCategory.find({});
    try{
        res.send([foodItem,foodCategorys]);
    }catch(err){
        console.log(err.message);
        res.send("Server Error")
    }
})

module.exports = router;