const mongoose = require ("mongoose");

const mongoDB = async () =>{
    await mongoose.connect('mongodb://127.0.0.1:27017/gofoodmern',{useNewUrlParser:true,useUnifiedTopology: true}).then(async ()=>{
        console.log("Connected to mongo!");
    });
    
}

module.exports = mongoDB;


