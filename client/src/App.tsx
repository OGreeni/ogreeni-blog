import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';

import NavBar from './components/navbar/NavBar';
import Home from './pages/home/Home';

function App() {
  return (
    <Router>
      <NavBar>
        <Link to="/">IMG</Link>
        <div>
          <Link to="/about">About me</Link>
          <Link to="/">GitHub</Link>
        </div>
      </NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
