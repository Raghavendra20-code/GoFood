const mongoose = require('mongoose');

const foodItems = new mongoose.Schema({
    
CategoryName:{
    type:String
},

name:{
    type:String
},
img:{
    type:String
},
options:{
    type:Array
},
description:{
    type:String
}

})

module.exports = mongoose.model('food-items',foodItems)