require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();

const port = 4000;

app.use(express.json());
app.use(cors());

// database connection with MongoDB

const dbUrl = process.env.DB_URL;
mongoose.connect(dbUrl);

// API Creation
app.get("/", (req, res) => {
  res.send("express app running");
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server running on Port " + port);
  } else {
    console.log("Error :" + error);
  }
});
