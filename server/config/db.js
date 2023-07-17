import mongoose from "mongoose";
import colors from "colors";

const db = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongoDB Connected: ${connect.connection.host}`.bgMagenta.white.underline
    );
  } catch (error) {
    console.log(error);
    return;
  }
};

export default db;
