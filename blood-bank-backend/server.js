// server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const donorRoutes = require("./routes/donor.routes");
const requestRoutes = require("./routes/request.routes");
const bloodRequestRoutes = require("./routes/bloodRequest.routes");
const userRoutes = require("./routes/user.routes");
const cors = require("cors");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
// Middleware

app.use(express.json());

// write simple home route to test
app.get("/", (req, res) => {
  res.send("Welcome to the Blood Donation API");
});

// Routes
app.use("/api/donors", donorRoutes);
app.use("/api/requests", requestRoutes);
app.use("/api/users", userRoutes);
app.use("/api/requests", bloodRequestRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));
