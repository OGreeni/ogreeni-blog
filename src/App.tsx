import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';

import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <Router>
      <NavBar>
        <Link to="/">
          <img
            src="https://github.com/cadgerfeast/pixel-icons/blob/master/png-128/home.png?raw=true"
            alt="Home"
          />
        </Link>
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
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <div>
          <Footer>
            <Link to="/contact">
              Contact me
              <img
                src="https://github.com/cadgerfeast/pixel-icons/blob/master/png-128/phone.png?raw=true"
                alt="Contact"
              />
            </Link>
            <a href="https://www.linkedin.com/in/omri-green-880091240/">
              LinkedIn
              <img
                src="https://github.com/cadgerfeast/pixel-icons/blob/master/png-128/linkedin.png?raw=true"
                alt="LinkedIn"
              />
            </a>
          </Footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
