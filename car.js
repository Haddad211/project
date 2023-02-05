const mongoose=require("mongoose");

const car =mongoose.Schema({

name:{
    type:String,
    required:true,
},
serial:{
    type:Number,
    required:true,
},

});
module.exports=Cars=mongoose.model("cars",car); 