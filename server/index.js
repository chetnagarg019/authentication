// import express from 'express' //express app hai 
// import dotenv from 'dotenv' //Backend me aapko kuch values secret rakhni hoti hain—jaise: API key passwords 
// import cors from 'cors' // Cross-Origin Resource Sharing 
// import authRoutes from './routes/authRoutes.js'

// dotenv.config() //file ko load krne ke loye hume function call ki need hoti hai 
// const app = express()
// app.use(cors()); // allow requests from frontend
// app.use(express.json()) // to read json data

// //middleware
// // app.use('/api',authRoutes);
// app.use('/api/auth', authRoutes);


// app.get('/',(req,res)=>{
//     res.send('Server chal rha hai bhai');
// })

// const PORT = process.env.PORT || 3000;
// app.listen(PORT,()=>{
//     console.log(`The server is running on http://localhost:${PORT}`);
// })

// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import authRoutes from './routes/authRoutes.js';

// dotenv.config();
// const app = express();

// app.use(cors()); 
// app.use(express.json());

// // middleware
// app.use('/api/auth', authRoutes);

// app.get('/', (req, res) => {
//     res.send('Server chal rha hai bhai');
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`The server is running on http://localhost:${PORT}`);
// });


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



