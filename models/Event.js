import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  venue: String,
  startDate: Date,
  endDate: Date,
  capacity: Number,
  imageUrl: String,
}, { timestamps: true });

export default mongoose.model("Event", eventSchema);
