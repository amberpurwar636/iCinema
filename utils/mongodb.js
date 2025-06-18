import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongodb connected ..."))
  .catch((err) => console.log(err));

console.log(process.env.MONGO_URL);
