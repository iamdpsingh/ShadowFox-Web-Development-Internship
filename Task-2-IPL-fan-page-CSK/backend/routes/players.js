const express = require("express");
const router = express.Router();
const Player = require("../models/Player");

// Get all players
router.get("/", async (req, res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new player (for admin use)
router.post("/", async (req, res) => {
    const { name, image, role, profileLink } = req.body;
    const newPlayer = new Player({ name, image, role, profileLink });

    try {
        const savedPlayer = await newPlayer.save();
        res.status(201).json(savedPlayer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
