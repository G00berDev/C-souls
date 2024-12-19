const express = require("express");
const router = express.Router();
const PlayerScore = require("../models/PlayerScore");

router.post("/submit", async (req, res) => {
const { name, score, time } = req.body;
try {
const newScore = new PlayerScore({ name, score, time });
await newScore.save();
res.status(201).json(newScore);
} catch (error) {
res.status(500).json({ error: "Failed to submit score" });
}
});

router.get("/top", async (req, res) => {
try {
const topScores = await PlayerScore.find().sort({ score: -1 }).limit(10);
res.json(topScores);
} catch (error) {
res.status(500).json({ error: "Failed to retrieve scores" });
}
});

module.exports = router;
