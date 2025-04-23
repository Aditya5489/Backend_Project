import dotenv from "dotenv"
dotenv.config();
import connectDB from "./db/index.js"

dotenv.config({
    path: './env'
})
connectDB()








/*
import express from "express"
const app=express()
(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",()=>{
            console.log("ERRR: ",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    }catch(err){
        console.error('An error occurred:', err);
        throw err
    }
})*/