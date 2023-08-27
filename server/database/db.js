import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbConnect = async() => {
  const URL = process.env.DATABASE_URL;
  try{
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
    });

    console.log("DB Connected");
  }
  catch(error){
    console.log('Error connecting to database');
    console.log(error.message);
  }

};

export default dbConnect;