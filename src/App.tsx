import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';

import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Modal from './components/modal/Moda';
import Form from './components/form/Form';
import Button from './components/button/Button';

import Home from './pages/home/Home';
import About from './pages/about/About';

function App() {
  const [show, setShow] = useState(false);

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
            <Button onClick={() => setShow(true)}>Contact me</Button>
            <Button
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/omri-green-880091240/',
                  '_blank'
                )
              }
            >
              LinkedIn
            </Button>
          </Footer>
          <Modal show={show} setShow={setShow}>
            <Form>
              <h3>I'll reach out to you as soon as I can!</h3>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" required name="email" />
              </div>
              <Button>Submit</Button>
            </Form>
          </Modal>
        </div>
      </div>
    </Router>
  );
}

export default App;
