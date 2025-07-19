// client/src/App.js
import React from "react";
import CodeEditor from "./components/CodeEditor";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import EditorPage from './pages/EditorPage';
import DocsPage from './pages/DocsPage';
import IssuePage from './pages/IssuePage';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/editor" element={<EditorPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/issue" element={<IssuePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;