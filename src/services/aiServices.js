import axios from 'axios';

const API_BASE = 'http://localhost:5000/api/ai';

export const getAIResponse = async (prompt) => {
  try {
    const res = await axios.post(`${API_BASE}/generate`, { prompt });
    return res.data.reply;
  } catch (error) {
    console.error('AI Error:', error);
    return 'Something went wrong. Try again later.';
  }
};