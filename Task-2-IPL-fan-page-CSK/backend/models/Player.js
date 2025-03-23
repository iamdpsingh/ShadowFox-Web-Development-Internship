const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  name: String,
  role: String,
  image: String,
  link: String,
  team: { type: String, default: "CSK" }, // Ensuring team is CSK
  stats: {
    matches: Number,
    runs: Number,
    wickets: Number,
    strikeRate: Number,
    economy: Number,
    average: Number, // Batting average
    bestBowling: String, // Best bowling performance (e.g., "5/20")
    highestScore: Number, // Highest individual score
    battingAverage: Number, // Batting Average
    bowlingAverage: Number, // Bowling Average
    fours: Number, // Number of 4s
    sixes: Number, // Number of 6s
    overs: Number, // Total overs bowled
    hundreds: Number, // Number of 100s
    fifties: Number, // Number of 50s
    catches: Number, // Total catches taken
    stumpings: Number, // Total stumpings (for wicketkeepers)
  }
});

module.exports = mongoose.model("Player", PlayerSchema);
