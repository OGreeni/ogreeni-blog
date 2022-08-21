import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';

import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';

import Home from './pages/home/Home';
import About from './pages/about/About';

function App() {
  return (
    <Router>
      <NavBar>
        <Link to="/">Home</Link>
        <div>
          <Link to="/about">About me</Link>
          <a href="https://github.com/OGreeni">GitHub</a>
        </div>
      </NavBar>
      <div className="container">
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <div>
          <Footer>
            <Link to="/contact">Contact me</Link>
            <a href="https://www.linkedin.com/in/omri-green-880091240/">
              LinkedIn
            </a>
          </Footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
