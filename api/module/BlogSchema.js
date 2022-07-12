import mongoose from "mongoose";

const createSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  like: {
    type: Number,
    default: 0,
  },

  image: {
    date: Buffer,
    contentType: String,
  },
});

export default mongoose.model("Blog", createSchema);
