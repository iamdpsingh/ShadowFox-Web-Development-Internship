const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  name: String,
  role: String,
  image: String,
  link: String,
  stats: {
    matches: Number,
    runs: Number,
    wickets: Number,
    strikeRate: Number,
    economy: Number
  }
});

module.exports = mongoose.model("Player", PlayerSchema);
