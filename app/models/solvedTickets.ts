import mongoose, { Schema } from "mongoose";

const solevdTicketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: String,
    progress: Number,
    status: String,
    createdTime: String,
    editedTime: String,
  },
  {
    timestamps: true,
  }
);

// if SolvedTickets is not available, it will create a new table using mangoose.model()
const SolvedTickets =
  mongoose.models.SolvedTickets ||
  mongoose.model("SolvedTickets", solevdTicketSchema);

export default SolvedTickets;
