import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MONGO DB CONNECTION DONE");
        console.log(mongoose.connection.name);
    }catch (error){
      console.error("Mongo DB connection failed",error);
      process.exit(1);     ;
    }
}

export default connectDB