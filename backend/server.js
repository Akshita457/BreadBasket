
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173"
}));

app.use(express.json({ limit: "10kb" }));

app.get("/", (req, res) => {
  res.send("BreadBasket backend is running!");
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "BreadBasket API is working"
  });
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/donations", require("./routes/donation"));
app.use("/api/ngo", require("./routes/ngo"));
app.use("/api/donation-actions", require("./routes/donationActions"));

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    if (!process.env.MONGODB_URI || !process.env.JWT_SECRET) {
      throw new Error("MONGODB_URI and JWT_SECRET must be configured");
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Backend startup failed:", error.message);
    process.exit(1);
  }
}

startServer();
