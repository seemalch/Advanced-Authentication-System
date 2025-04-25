import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from "cookie-parser";
import path from "path";
import { connectdB } from './dB/connectdB.js';
import authRoutes from '../backend/routes/auth_routes.js'

dotenv.config();
const app= express()
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(cors({origin : "http://localhost:5173", credentials: true }));

app.use(express.json());
app.use(cookieParser()); 

app.use("/api/auth", authRoutes);
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("*", (req,res)=>{
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}
app.listen(PORT, ()=>{
connectdB();
console.log("Server is running", PORT)}); 