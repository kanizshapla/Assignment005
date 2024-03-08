import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import NavBar from "./components/Header";

import Home from "./components/Home";
import { ProjectData } from "./components/ProjectData";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Home />} />
          <Route path="/project-data" element={<ProjectData />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
