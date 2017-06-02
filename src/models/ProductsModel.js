import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String
  },
  reviews: {
    required: true,
    type: String
  },
});

export default mongoose.model("Contact", schema);