const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
mongoose
.connect(process.env.MONGO_URI, {
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected successfully"))
.catch((err) => console.error("Database connection failed:", err));

// Test route
app.get("/", (req, res) => {
res.send("Server is running...");
});

// Start server
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
