const express = require('express');
const LeaderboardPlayer = require('../models/LeaderboardPlayer');
const router = express.Router();

// Fetch all CSK leaderboard players
router.get('/', async (req, res) => {
  try {
    const players = await LeaderboardPlayer.find();
    res.json(players);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
