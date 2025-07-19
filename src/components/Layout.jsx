import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h1 className="text-xl font-bold mb-6">DevConnect 🚀</h1>
        <nav className="space-y-4">
          <Link to="/" className="block hover:text-blue-400">Dashboard</Link>
          <Link to="/editor" className="block hover:text-blue-400">Live Editor</Link>
          <Link to="/docs" className="block hover:text-blue-400">Docs AI</Link>
          <Link to="/issue" className="block hover:text-blue-400">Issue Helper</Link>
        </nav>
      </aside>
      <main className="flex-1 bg-gray-100 p-6 overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;