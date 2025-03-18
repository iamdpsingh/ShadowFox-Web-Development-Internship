const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

// ✅ Improved CORS Configuration
app.use(cors({
  origin: "*", // Change this to specific frontend URL for better security
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

// ✅ Connect to MongoDB with Improved Error Handling
mongoose
  .connect("mongodb://127.0.0.1:27017/ShadowFox-task-2-IPL-Fan_Page-CSK", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1); // Stops the server if DB connection fails
  });

// ✅ Import Routes
const newsRoutes = require("./routes/news");
const playerRoutes = require("./routes/players");

// ✅ Use Routes
app.use("/api/news", newsRoutes);
app.use("/api/players", playerRoutes);

app.get("/", (req, res) => {
    res.send("✅ CSK Fan Page Backend Running!");
});

// ✅ Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
