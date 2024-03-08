import Typography from "@mui/material/Typography";
import React from "react";

const Heading = ({ title }) => {
  // Array of headings
  const headings = {
    projects: "Projects",
    experience: "Experience",
    about: "About",
  };

  return (
    <Typography variant="h1" gutterBottom>
      {headings[title]}
    </Typography>
  );
};

export default Heading;
