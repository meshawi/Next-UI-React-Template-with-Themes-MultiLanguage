import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Showcase from './pages/Showcase';
import Settings from './pages/Settings';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
      <div className="p-8">
        <Navbar />
        <Routes>
          <Route path="/" element={<Showcase />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}
