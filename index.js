import express from "express";
import mongoose from "mongoose";
import adminrouter from "./routes/adminRoutes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/admin/", adminrouter);

mongoose.connect("mongodb://127.0.0.1:27017/BookMyCloths").then(() => {
  console.log("Connected");
});

app.listen(9999, () => {
  console.log("connected with the server 9999");
});
