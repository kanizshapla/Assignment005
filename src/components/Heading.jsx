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
    fontFamily: "Roboto, sans-serif", // Use a suitable font-family
    fontSize: "2rem", // Adjust the font size
    fontWeight: 700, // Adjust the font weight
    marginBottom: "20px", // Add some space below the heading
    marginTop: "60px",
    color: "#000", // Font color for responsive
    padding: "10px", // Padding for better visibility
    width: "250px", // Width for responsive
    height: "50px",
    margin: "0 auto",
  };

  return (
    <Typography variant="h1" gutterBottom style={styles}>
      {headings[title]}
    </Typography>
  );
};

export default Heading;
