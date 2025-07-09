const mongoose=require("mongoose");
const productSchema=new mongoose.Schema({
    product_name:{
        type:String,
        required:true
    },
    product_brand:{
        type:String,
        required:true
    },
    product_material:{
        type:String,
        required:true
    },
    product_quantity:{
        type:Number,
        required:true
    },
    product_rating:{
        type:Number,
        required:true
    },
    product_price:{
        type:Number,
        required:true
    },
    product_photo:{
        type:String,
        required:true
    },
    product_category:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("product",productSchema); //modelname and object as argument