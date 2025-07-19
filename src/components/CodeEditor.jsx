// client/src/components/CodeEditor.jsx
import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = () => {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("// Start coding here...");

  const handleEditorChange = (value) => {
    setCode(value);
  };

  return (
    <div className="w-full h-screen flex flex-col bg-zinc-900 text-white p-4">
      <div className="mb-4">
        <label className="mr-2">Language:</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-zinc-800 text-white p-2 rounded"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="cpp">C++</option>
          <option value="java">Java</option>
          <option value="html">HTML</option>
        </select>
      </div>

      <Editor
        height="80vh"
        theme="vs-dark"
        language={language}
        value={code}
        onChange={handleEditorChange}
        options={{
          fontSize: 16,
          minimap: { enabled: false },
          wordWrap: "on",
        }}
      />
    </div>
  );
};

export default CodeEditor;