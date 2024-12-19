// src/utils/cipher.js

// Function to apply a simple transposition cipher
export const scrambleWord = (word) => {
return word.split("").sort(() => Math.random() - 0.5).join("");
};

// Function to check if the answer matches the unscrambled word
export const checkAnswer = (input, original) => {
return input === original;
};
