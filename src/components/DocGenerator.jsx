// client/src/components/DocGenerator.jsx
import React, { useState } from 'react';
import axios from 'axios';

const DocGenerator = () => {
  const [code, setCode] = useState('');
  const [docs, setDocs] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerateDocs = async () => {
    if (!code.trim()) return;
    setLoading(true);
    try {
      // ← Make sure this URL matches your backend port
      const res = await axios.post('http://localhost:5000/api/docs/generate', { code });
      setDocs(res.data.documentation);
    } catch (error) {
      setDocs('⚠️ Failed to generate documentation. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">📄 Intelligent Documentation Generator</h2>
      <textarea
        rows={10}
        className="w-full border p-3 rounded text-sm font-mono"
        placeholder="Paste your code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button
        onClick={handleGenerateDocs}
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Docs'}
      </button>
      {docs && (
        <div className="mt-6 bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap">
          <h3 className="font-bold mb-2">📝 Output:</h3>
          {docs}
        </div>
      )}
    </div>
  );
};

export default DocGenerator;