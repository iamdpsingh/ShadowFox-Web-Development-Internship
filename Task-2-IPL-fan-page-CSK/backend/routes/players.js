const express = require("express");
const router = express.Router();
const Player = require("../models/Player");

// Fetch all players
router.get("/", async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Fetch a specific player by profile link
router.get("/:playerName", async (req, res) => {
  try {
    const player = await Player.findOne({ link: `/players/${req.params.playerName}` });
    if (!player) return res.status(404).json({ message: "Player not found" });
    res.json(player);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
