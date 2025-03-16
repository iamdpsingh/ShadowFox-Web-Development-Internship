const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    name: String,
    image: String,
    role: String, 
    profileLink: String, 
});

module.exports = mongoose.model("Player", PlayerSchema);
