const mongoose = require("mongoose");
const userschema =new mongoose.Schema({
    name:{type:String,required:[true,"there must be a string not empty"]},
    email:{type:String,required:[true,"there must be a string not empty"]},
    phone:{type:Number,required:[true,"there must be a number not empty"]},
    password:{type:String,required:[true,"there must be a string not empty"]}
})

module.exports = mongoose.model("User",userschema);