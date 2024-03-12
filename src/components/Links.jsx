// Links.jsx
import LaunchIcon from "@mui/icons-material/Launch";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";

const Links = ({ githubLink, liveLink }) => {
  const handleGithubClick = () => {
    // Add your custom logic for opening GitHub link
    window.open(githubLink, "_blank");
  };

  const handleLiveClick = () => {
    // Add your custom logic for opening Live link
    window.open(liveLink, "_blank");
  };

  return (
    <>
      {githubLink && (
        <Tooltip title="GitHub" arrow>
          <IconButton aria-label="github" onClick={handleGithubClick}>
            <LaunchIcon />
          </IconButton>
        </Tooltip>
      )}

      {liveLink && (
        <Tooltip title="Live Demo" arrow>
          <IconButton aria-label="live" onClick={handleLiveClick}>
            <LaunchIcon />
          </IconButton>
        </Tooltip>
      )}
    </>
  );
};

export default Links;
