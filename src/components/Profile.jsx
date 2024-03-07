import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";

const Profile = ({ imagePath, altText, paragraphText }) => {
  // Function to split the paragraph into lines with a maximum number of words
  const splitParagraph = (text, wordsPerLine) => {
    const words = text.split(" ");
    const lines = [];
    let currentLine = "";

    words.forEach((word, index) => {
      if ((index + 1) % wordsPerLine === 0) {
        lines.push(currentLine + word);
        currentLine = "";
      } else {
        currentLine += word + " ";
      }
    });

    // Add the remaining words
    if (currentLine.trim() !== "") {
      lines.push(currentLine.trim());
    }

    return lines;
  };

  const lines = splitParagraph(paragraphText, 15);

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Avatar
          src={imagePath}
          alt={altText}
          sx={{ width: 200, height: 200, marginBottom: 2 }}
        />
      </Grid>
      <Grid item>
        {lines.map((line, index) => (
          <Typography key={index}>{line}</Typography>
        ))}
      </Grid>
    </Grid>
  );
};

export default Profile;
