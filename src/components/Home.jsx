import React from "react";

import "../App.css";
import Contact from "./Contact";
import Experience from "./Experience";
import Heading from "./Heading";
import Profile from "./Profile";
import { ProjectData } from "./ProjectData";

const Home = () => (
  <>
    <Heading title="About" />
    <Profile
      imagePath="/images/profile.jpg"
      altText="My Profile Picture"
      paragraphText="A passionate and dedicated web developer, creating exceptional websites and web applications. I specialize in full stack web development, utilizing modern technologies such as HTML5, CSS3, JavaScript, React, NodeJs and responsive design principles. I am constantly expanding my skills and staying up-to-date with the latest industry trends to deliver the best possible user experiences."
    />
    <ProjectData />
    <Experience />
    <Contact />

    <hr />
  </>
);

export default Home;
