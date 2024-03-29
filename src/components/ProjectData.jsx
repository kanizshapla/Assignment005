// ProjectData.jsx
import { Grid } from "@mui/material";
import React from "react";
import Heading from "./Heading";
import Projects from "./Projects";

const projectData = [
  {
    title: "News Letter",
    imageUrl: "/images/newsletter.PNG",
    description:
      "The newsletter signup feature is implemented using HTML, CSS, Bootstrap, and JavaScript to create a visually appealing and interactive form for users to subscribe to the newsletter. By utilizing HTML, CSS, Bootstrap, and JavaScript, this project creates an attractive and functional newsletter signup form.",
    method: "HTML, CSS",
    githubLink: "https://github.com/kanizshapla/NewsLetter-Signup",
    liveLink: "https://tasty-frog-housecoat.cyclic.app",
  },
  {
    title: "Tin Dog",
    imageUrl: "images/dog-img.jpg",
    description:
      "The TinDog is implemented using HTML, CSS, Bootstrap, and JavaScript to create a visually appealing and interactive form for users to subscribe for a monthly or yearly basis. To make this project more functional, will implement node js and other responsive designs later.",
    method: "HTML, CSS",
    githubLink: "https://github.com/kanizshapla/Tindog",
    liveLink: "https://kanizshapla.github.io/Tindog/",
  },
  {
    title: "Cine Critique",
    imageUrl: "images/cine.png",
    description:
      "CineCritique is an innovative web-based project developed using Node.js, React, and JavaScript, offering a comprehensive platform for film enthusiasts to share their reviews and critique movies. The project seamlessly integrates both frontend and backend functionalities to create a cohesive user experience.",
    method: "HTML, CSS, Javascript",
    githubLink: "https://github.com/kanizshapla/cinecritique-web-app",
    liveLink: "https://cinecritique-web-app-inky.vercel.app/",
  },
];

const ProjectData = () => {
  return (
    <>
      <Heading title="projects" />
      <Grid container spacing={2}>
        {projectData.map((project, index) => (
          <Grid item key={index} xs={12} sm={4}>
            <Projects {...project} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export { ProjectData };
