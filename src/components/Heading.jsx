import Typography from "@mui/material/Typography";
import React from "react";

const Heading = ({ title }) => {
  const headings = {
    projects: "Projects",
    experience: "Experience",
    about: "Kaniz Fatema",
    contact: "Contact",
    quotes: "Wisdom Drops",
  };

  const styles = {
    fontFamily: "Roboto, sans-serif",
    fontSize: "2rem",
    fontWeight: 700,
    marginBottom: "20px",
    marginTop: "60px",
    color: "#000",
    padding: "10px",
    width: "250px",
    height: "50px",
    margin: "0 auto",
    backgroundColor: "#fff",
  };

  return (
    <Typography variant="h1" gutterBottom style={styles}>
      {headings[title]}
    </Typography>
  );
};

export default Heading;
