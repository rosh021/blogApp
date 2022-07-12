import mongoose from "mongoose";

export const databaseConnection = () => {
  try {
    const connect = mongoose.connect(process.env.MONGO_URL);
    connect && console.log("Database is Connected");
  } catch (error) {
    console.log(error);
  }
};
