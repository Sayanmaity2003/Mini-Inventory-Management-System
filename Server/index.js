// const express = require("express"); without "type": "module",

import express from "express"; //with "type": "module",
import cors from "cors";
import connectDB from "./db/connection.js";
import authRoutes from "./routes/auth.js";

const app = express();
app.use(cors());
app.use(express.json()); //when we pass some data from frontend to backend side it converts the data into json file
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res)=>{
    res.send("Server is Running...");
})

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server is running on port: ${PORT}`)
})
