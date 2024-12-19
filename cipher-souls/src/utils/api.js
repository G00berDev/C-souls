import axios from "axios";

const API_URL = "http://localhost:5000/api/leaderboard";

export const submitScore = async (name, score, time) => {
await axios.post(`${API_URL}/submit`, { name, score, time });
};

export const fetchTopScores = async () => {
const response = await axios.get(`${API_URL}/top`);
return response.data;
};
