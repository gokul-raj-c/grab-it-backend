const mongoose=require("mongoose");
const registrationSchema=new mongoose.Schema({
    user_name:{
        type:String,
        required:true
    },
    user_email:{
        type:String,
        unique:true,
        required:true
    },
    user_password:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("registration",registrationSchema); //modelname and object as argument