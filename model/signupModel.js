const mongoose=require("mongoose")
const signupSchema=new mongoose.Schema(
    {
        name:String,
        address:String,
        phone:String,
        email:String,
        password:String

    }
)
module.exports=mongoose.model("signupresume",signupSchema)