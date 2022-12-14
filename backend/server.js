import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import { notFound, errorHandler } from "../middleware/errorMiddleware.js";
import products from "./data/products.js";
import productRoutes from "./routes/productRoutes.js";
var app = express();

dotenv.config();

connectDB();

app.get("/", (req, res) => {
  res.send("she be runnin...");
});

app.use("/api/products", productRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `server running ${process.env.NODE_ENV} mode on port ${PORT}`.green
      .underline.bold
  )
);
