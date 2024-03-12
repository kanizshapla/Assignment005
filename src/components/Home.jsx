import React from "react";

import "../App.css";
import Contact from "./Contact";
import Experience from "./Experience";
import Profile from "./Profile";
import { ProjectData } from "./ProjectData";
import Quotes from "./Quotes";

const Home = () => (
  <>
    <Profile
      imagePath="/images/profile.jpg"
      altText="My Profile Picture"
      paragraphText="A passionate and dedicated web developer, creating exceptional websites and web applications. I specialize in full stack web development, utilizing modern technologies such as HTML5, CSS3, JavaScript, React, NodeJs and responsive design principles. I am constantly expanding my skills and staying up-to-date with the latest industry trends to deliver the best possible user experiences."
    />
    <Quotes />
    <ProjectData />
    <br />
    <Experience />
    <Contact />
  </>
);

export default Home;
