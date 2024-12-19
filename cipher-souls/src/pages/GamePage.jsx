import React, { useState, useEffect } from "react";
import { scrambleWord, checkAnswer } from "../utils/cipher";
import ProgressBar from "../components/CipherGame/ProgressBar";
import Timer from "../components/CipherGame/timer";

const GamePage = () => {
const [word, setWord] = useState(""); // Original word
const [scrambled, setScrambled] = useState(""); // Scrambled word
const [input, setInput] = useState(""); // Player's input
const [isCorrect, setIsCorrect] = useState(null);
const [level, setLevel] = useState(1);

// Example word list for each level
const wordList = ["hello", "react", "cipher", "challenge"];

useEffect(() => {
const originalWord = wordList[level - 1];
setWord(originalWord);
setScrambled(scrambleWord(originalWord));
}, [level]);

const handleSubmit = () => {
if (checkAnswer(input, word)) {
    setIsCorrect(true);
    setLevel((prev) => prev + 1); // Move to next level
} else {
    setIsCorrect(false);
}
setInput("");
};

return (
<div className="game-container">
    <h1>Level {level}</h1>
    <Timer />
    <p>Unscramble the word: <strong>{scrambled}</strong></p>
    <input
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="Your guess..."
    />
    <button onClick={handleSubmit}>Submit</button>
    {isCorrect !== null && (
    <p>{isCorrect ? "Correct! 🎉" : "Incorrect. Try again!"}</p>
    )}
    <ProgressBar progress={(level / wordList.length) * 100} />
</div>
);
};

export default GamePage;
