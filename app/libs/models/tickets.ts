import mongoose, { Schema } from "mongoose";

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: String,
    progress: Number,
    status: String,
  },
  {
    timestamps: true,
  }
);

// if Tickets is not available, it will create a new table using mangoose.model()
const Tickets =
  mongoose.models.Tickets || mongoose.model("Tickets", ticketSchema);

export Tickets