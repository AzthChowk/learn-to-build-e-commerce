import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log(`CONNECTION SUCCESSFUL.${connection.connection.host}`);
  } catch (error) {
    console.log(`CONNECTION FAILED.`);
  }
};
export default connectDB;
