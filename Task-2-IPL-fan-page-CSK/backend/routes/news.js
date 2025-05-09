const express = require("express");
const router = express.Router();
const News = require("../models/News");

router.get("/", async (req, res) => {
    try {
        const news = await News.find().sort({ date: -1 });
        res.json(news);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
