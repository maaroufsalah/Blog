import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO); // DB locally
    console.log("MongoDB is connected");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;

// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     console.log("connectDB is started");
//     console.log("MongoDB URI:", process.env.MONGO);
//     await mongoose.connect(process.env.MONGO); // Use the environment variable
//     console.log("MongoDB is connected");
//   } catch (err) {
//     console.error("Failed to connect to MongoDB:", err.message);
//     process.exit(1); // Exit the app if the database connection fails
//   }
// };

// export default connectDB;
