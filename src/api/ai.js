import axios from "axios";

export const getAutocomplete = async (prompt) => {
  try {
    const res = await axios.post("/api/ai/autocomplete", { prompt });
    return res.data.completion;
  } catch (error) {
    console.error("AI Autocomplete failed:", error);
    return "";
  }
};