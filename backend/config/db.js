import mongoose from "mongoose";
import options from "./connectOptions.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, options);

    console.log(
      `Connected to MongoDB: ${conn.connection.host}`.green.underline.bold
    );
  } catch (error) {
    console.error(`Error: $${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
