import mongoose from "mongoose";
import { config } from "./config/config";

const uri = config.mongoose;

async function connectDB() {
  try {
    await mongoose.connect(uri);
    log("info", "Mongoose is ready 🚀");
  } catch (error: unknown) {
    log("error", `Error connecting to MongoDB ${error}`);
    process.exit(1);
  }
}

export default connectDB;
