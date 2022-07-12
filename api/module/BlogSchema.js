import mongoose from "mongoose";

const createSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
    maxLength: [50, "Please Enter the description length less then 50"],
    minLength: [10, "Please Enter the description length more then 10"],
  },

  like: {
    type: Number,
    default: 0,
  },

  image: {
    date: Buffer,
    contentType: "image/png",
    required: true,
  },
});

export default mongoose.model("Blog", createSchema);
