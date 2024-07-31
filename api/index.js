require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectdb = require("./config/db");
const router = require("./routes/ProductRouts");
const path = require("path");

const port = process.env.PORT || 5000;
app.use(express.json());

app.use(cors());
app.use("/product", router);

// Serve static files from the uploads directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//port------------------------
connectdb()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Failed to connect to database", err);
  });
