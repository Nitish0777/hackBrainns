import express from "express";
import db from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";
import morgan from "morgan";
import authRoutes from "./routes/authRoute.js";
import multer from "multer";

// config dotenv
dotenv.config();

// connect to database
db();

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the server",
  });
});

const port = process.env.PORT;

app.listen(port, (err) => {
  if (err) {
    return console.log(`Error: ${err.message}`.red.underline.bold);
  }
  console.log(`Server is running on port ${port}`.bgCyan);
});
