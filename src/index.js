import dotenv from "dotenv"
import connectDB from "./db/index.js";


dotenv.config({
    path: './env'
})









connectDB()


































// import mongoose from 'mongoose'
// import { DB_NAME } from './constance';
// import express from 'express';
// const app = express()

// ( async ()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//        app.on("errror", (err)=>{
//         console.log("errr", err);
//         throw err
//        })

//        app.listen(process.env.PORT, ()=>{
//         console.log(`App is listning on port: ${process.env.PORT}`);
//        })
//     } catch (error) {
//        console.log("Error: ", error); 
//        throw error
//     }
// }) ()
