import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import About from "./pages/About"
import Blogs from "./pages/Blogs"
import Projects from "./pages/Projects"
import Home from "./pages"

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </Router> 
  );
}

export default App;
