
import mongoose from 'mongoose';
import 'dotenv/config';

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI must be set in .env file");
}

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
