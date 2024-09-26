import '@fortawesome/fontawesome-free/css/all.min.css';
import 'font-awesome/css/font-awesome.min.css';

import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './About';
import Address from './Address';
import Contact from './Contact';
import GithubProfile from './GithubProfile';
import Home from './Home';
import Navbar from './Navbar';
import Projects from './Projects';
import Skills from './Skills';
function App() {
  return (
    <Router>
      <Navbar />
      <Address/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/all-projects" element={<Projects />} /> 
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/githubProfile" element={<GithubProfile />} />
        <Route path="/github-profile" element={<GithubProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
