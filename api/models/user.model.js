import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        //same passwords can occur
    }
    }, {timestamps: true})
    const User=mongoose.model('User',userSchema);
    export default User;//i can use this anywhere in the application