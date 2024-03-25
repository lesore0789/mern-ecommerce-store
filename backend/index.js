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

// Image Storage Engine

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

// Creating Upload Endpoint for Images
app.use("/images", express.static("upload/images"));

app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server running on Port " + port);
  } else {
    console.log("Error :" + error);
  }
});
