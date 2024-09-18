require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectdb = require("./config/db");
const ProductRoutes = require("./routes/ProductRouts");
const UserRoutes = require("./routes/UserRoutes");
const ReviewRoutes = require("./routes/ReviewRoutes");
const path = require("path");
const cookieParser = require("cookie-parser");

const port = process.env.PORT || 5000;

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    // origin: "http://localhost:3000", // or your frontend's URL
    origin: "https://realhit.onrender.com", // or your frontend's URL
    credentials: true,
  })
);

//routes---------------------------------
app.use("/product", ProductRoutes);
app.use("/user", UserRoutes);
app.use("/review", ReviewRoutes);


app.use(express.static(path.join(__dirname, 'client/build')));

// Serve static files from the uploads directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// fallback to serve your React application's index.html------
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

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
