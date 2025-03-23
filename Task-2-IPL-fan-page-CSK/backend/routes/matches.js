const express = require("express");
const router = express.Router();
const Match = require("../models/Match");

// GET all matches
router.get("/", async (req, res) => {
  try {
    const matches = await Match.find(); // Fetch matches from MongoDB
    res.json(matches);
  } catch (error) {
    console.error("❌ Error fetching matches:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
