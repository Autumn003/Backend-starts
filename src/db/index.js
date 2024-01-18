import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstacnce = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(
      `MongoDB CONNECTED !! DB HOST: ${connectionInstacnce.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB connection FAILED ", error);
    process.exit(1);
  }
};

export default connectDB;
