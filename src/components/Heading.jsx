import Typography from "@mui/material/Typography";
import React from "react";

const Heading = ({ title }) => {
  const headings = {
    projects: "Projects",
    experience: "Experience",
    about: "Kaniz Fatema",
  };

  const styles = {
    color: "#333", // You can change the color to your preference
    fontFamily: "Roboto, sans-serif", // Use a suitable font-family
    fontSize: "2rem", // Adjust the font size
    fontWeight: 700, // Adjust the font weight
    marginBottom: "20px", // Add some space below the heading
    marginTop: "30px",
  };

  return (
    <Typography variant="h1" gutterBottom style={styles}>
      {headings[title]}
    </Typography>
  );
};

export default Heading;
