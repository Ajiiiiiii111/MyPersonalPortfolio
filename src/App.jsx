// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import About from './about';

const App = () => {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/skills" element={<div>Skills Page</div>} />
      </Routes>
    </Router>
  );
};

export default App;
