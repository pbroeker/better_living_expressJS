import mongoose from "mongoose";
mongoose.set("strictQuery", false);

const db = mongoose.connection;

export const main = async (url: string) => {
  try {
    await mongoose.connect(url, function (err) {
      if (err) throw err;
      console.log("Successfully connected to MongoDB");
    });
  } catch (error) {
    if (error) {
      console.log("err: ", error);
    }
  }
};
