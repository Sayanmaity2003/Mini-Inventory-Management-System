import mongoose from "mongoose"; //This library creates the connection between mongodb-database and nodejs


const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database Connected Successfulyy");
    }catch(e){
        console.log("Connection Failed to Databse", e.message);
        process.exit(1);
    }
}

export default connectDB;
