const mongoose = require('mongoose');

const PlayerScoreSchema = new mongoose.Schema({
playerName: { type: String, required: true },
score: { type: Number, required: true },
time: { type: Number, required: true },
date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('PlayerScore', PlayerScoreSchema);
