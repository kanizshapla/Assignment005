import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import NavBar from "./components/Header";
import Home from "./components/Home";
import { ProjectData } from "./components/ProjectData";
import Quotes from "./components/Quotes";

function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Home />} />
          <Route path="/quotes" element={<Quotes />} />
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
