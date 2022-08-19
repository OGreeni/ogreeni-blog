import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';

import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';

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
      <div className="container">
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
