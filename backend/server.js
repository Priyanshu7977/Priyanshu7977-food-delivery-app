import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

// Test Route
app.get("/", (req, res) => {
  res.send("API WORKING");
});

// Test API Route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend Connected Successfully" });
});

// Start Server
app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
