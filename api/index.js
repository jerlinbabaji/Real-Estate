import express from "express";
import mongoose from 'mongoose';
import dotenv from "dotenv";

import UserRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to MongoDB!');
}).catch((err)=>{
    console.log(err);
})
const app=express();
app.use(express.json());//if i dont write this then i will get undefined response in the terminal after i send request om insomnia
app.listen(3000,()=>{
    console.log('Server is running on port 3000!!'); 
}
);

app.use('/api/user',UserRouter);
app.use('/api/auth', authRouter);