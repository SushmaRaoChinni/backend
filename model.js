const mongoose =require("mongoose");

let ListUser=new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    }
})

module.exports=mongoose.model("ListUser",ListUser)
