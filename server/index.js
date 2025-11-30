


import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
// import mongoose, { connect } from 'mongoose';
import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

//route middleware
app.use("/api",authRoutes); //sare authroutes "/api " ke andr chle jayenge


connectDB() //database connect

app.get("/", (req, res) => {
  res.send("Server is working");
});

// ..port or server slot
const PORT = process.env.PORT || 5000;
app.listen(PORT,() =>{
  console.log(`Server is running on ${PORT}`);
  
});



