const mongoose = require("mongoose");

const MatchSchema = new mongoose.Schema({
  date: String,
  time: String,
  venue: String,
  team1: String,
  team2: String,
  team1Logo: String,
  team2Logo: String,
});

module.exports = mongoose.model("Match", MatchSchema);
