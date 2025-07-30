// scripts/createAdmin.js
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import Admin from "../models/Admin.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  const hashedPassword = await bcrypt.hash("your-password", 10);
  await Admin.create({ email: "admin@example.com", password: hashedPassword });
  console.log("Admin created");
  mongoose.disconnect();
});
