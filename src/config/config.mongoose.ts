import mongoose from "mongoose";
import * as  dotenv from "dotenv"

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/testdb";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/chat-app");
        console.log("MongoDB Connected!");
    } catch (error) {
        console.error(" MongoDB Connection Failed!", error);
        process.exit(1);
    }
};
