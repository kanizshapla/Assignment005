import React from "react";

import "./App.css";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import NavBar from "./components/Header";
import Profile from "./components/Profile";
import { ProjectData } from "./components/ProjectData";

function App() {
  return (
    <div>
      <NavBar />
      <hr />
      <br />
      <Profile
        imagePath="/images/profile.jpg"
        altText="My Profile Picture"
        paragraphText="A passionate and dedicated web developer, creating exceptional websites and web applications. I specialize in full stack web development, utilizing modern technologies such as HTML5, CSS3, JavaScript, React, NodeJs and responsive design principles. I am constantly expanding my skills and staying up-to-date with the latest industry trends to deliver the best possible user experiences."
      />
      <br />

      <ProjectData />
      <br />

      <Experience />
      <hr />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
