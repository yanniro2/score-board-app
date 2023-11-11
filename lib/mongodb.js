import mongoose from "mongoose";

const connetMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Conneted to mongoDB");
  } catch (error) {
    console.log(error);
  }
};

export default connetMongoDB;
