const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username :{
        type :String,
        required: [true,"Username is required"],
        unique: [true ,"Username has to be unique"]   
     }
     ,
    email  :{
        type :String,
        required: [true,"email  is required"],
        unique: [true ,"email  has to be unique"]   
     }
   ,
     password: {
       type:String,
        required: [true,"password  is required"],
     }

})

const userModel = mongoose.model("users",userSchema)
 
module.exports = userModel