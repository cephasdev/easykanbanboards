import mongoose from "mongoose";
import seed from "./seed";

const connectToDb = async () => {
  try {
    const dbConnString = process.env.MONGODB_URI;
    if (!dbConnString) {
      console.log("MONGODB_URI is not set");
      process.exit(1);
    }

    await mongoose.connect(dbConnString);
    console.log("Connected to MongoDB");

    seed();
  } catch (err) {
    console.error("Error connecting to MongoDB");
    process.exit(1);
  }
};

export default connectToDb;
