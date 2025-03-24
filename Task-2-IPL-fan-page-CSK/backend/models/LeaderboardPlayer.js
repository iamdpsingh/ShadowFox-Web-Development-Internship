const mongoose = require('mongoose');

const leaderboardPlayerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  matches: { type: Number, required: true },
  runs: { type: Number, default: 0 },
  strikeRate: { type: Number, default: 0 },
  average: { type: Number, default: 0 },
  fifties: { type: Number, default: 0 },
  hundreds: { type: Number, default: 0 },
  highestScore: { type: Number, default: 0 },
  wickets: { type: Number, default: 0 },
  economy: { type: Number, default: 0 },
  bestBowling: { type: String, default: "0/0" },
  image: { type: String, required: true },
  profileLink: { type: String, required: true }
});

module.exports = mongoose.model('LeaderboardPlayer', leaderboardPlayerSchema);
