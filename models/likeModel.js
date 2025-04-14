//import moongoose
const mongoose=require("mongoose");

//route handler
const likeSchema=new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"post",
    } ,
    user:{
     type:String,
     required:true,
    },
});

module.exports=mongoose.model("Like",likeSchema);