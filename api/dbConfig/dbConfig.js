import mongoose from "mongoose";

export const databaseConnection = () => {
  try {
    const Url = process.env.MONGO_URL;
    const connect = mongoose.connect(Url);

    connect && console.log("Database is Connected");
  } catch (error) {
    console.log("Error");
  }
};
