import React, { useState } from "react";
import { getAutocomplete } from "../api/ai";

const AIHelper = () => {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    const suggestion = await getAutocomplete(prompt);
    setResult(suggestion);
  };

  return (
    <div className="p-4 border rounded shadow">
      <textarea
        rows="3"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask AI for code suggestion..."
        className="w-full p-2 border"
      />
      <button onClick={handleSubmit} className="mt-2 px-4 py-2 bg-blue-500 text-white">
        Get Suggestion
      </button>
      {result && (
        <div className="mt-4 bg-gray-100 p-2 rounded">
          <strong>AI Suggestion:</strong>
          <pre>{result}</pre>
        </div>
      )}
    </div>
  );
};

export default AIHelper;