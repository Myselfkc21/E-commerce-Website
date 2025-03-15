import mongoose from "mongoose";

const connectDb = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Mongoose is connected");
  });
  await mongoose.connect(`${process.env.MONGO_URI}`);
};

export default connectDb;
