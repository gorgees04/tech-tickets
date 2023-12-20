import mongoose from "mongoose";

let isConnected = false; // to track the connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  // if it's not corrected
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "TicketsDB", // name of the collection
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};
