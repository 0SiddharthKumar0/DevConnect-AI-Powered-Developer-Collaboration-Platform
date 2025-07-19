import { useState } from 'react';
import { getAIResponse } from '../services/aiService';

export default function AIChat() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    setLoading(true);
    const res = await getAIResponse(prompt);
    setResponse(res);
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">💡 AI Code Assistant</h2>
      <textarea
        className="w-full p-3 border rounded mb-4"
        rows={5}
        placeholder="Ask me to generate code, docs, or suggestions..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        onClick={handleSend}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? 'Generating...' : 'Send to AI'}
      </button>

      {response && (
        <div className="mt-6 p-4 border rounded bg-gray-100 whitespace-pre-wrap">
          {response}
        </div>
      )}
    </div>
  );
}