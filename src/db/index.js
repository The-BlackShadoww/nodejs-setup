import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    // console.log(connectionInstance);
    console.log(
        `\n ⚙️   MongoDB Connected !! DB HOST ⚙️   ${connectionInstance.connection.host}`
    );
  } catch (e) {
    console.log("!!! MONGODB CONNECTION FAILED !!!: ", e);
    // throw e;
    process.exit(1); //? Read about this exit
  }
};

export default connectDB;
