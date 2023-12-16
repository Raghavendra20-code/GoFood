const mongoose = require('mongoose');

const foodCategory = new mongoose.Schema({
    
    CategoryName:{
    type:String
}

})

module.exports = mongoose.model('food-categorys',foodCategory)