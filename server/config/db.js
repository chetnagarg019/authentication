import mongoose from "mongoose";
//function to connect mongoDB

const connectDB= async ()=>{
    try {
        //connection string from .env file
     await mongoose.connect(process.env.Mongo_URL);
     console.log('MongoDB connected succesfully');
    } catch (error) {
        console.log("X connection failed");
        console.log(error.message);
        process.exit(1)
        
        
    }

};
export default connectDB;