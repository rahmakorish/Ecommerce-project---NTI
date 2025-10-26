const mongoose = require('mongoose')

const FQASchema = new mongoose.Schema({
        question:{
        type:String,
        required:true
    },
    answer:{
        type:String,
        required:true
    }
    
})
module.exports = mongoose.model("FAQ", FQASchema);