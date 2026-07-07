import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
dotenv.config();

const port=process.env.PORT || 8000;

const app=express();


app.get("/",(req,res)=>{
    res.send("Gatewa server is running");
});

app.listen(port,()=>{
    connectDb();
    console.log(`Gateway server is running on port ${port}`);
});