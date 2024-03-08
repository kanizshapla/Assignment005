import { Favorite, MoreVert, Share } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import React, { useState } from "react";
import "../styles/projects.css";

const ExpandMore = ({ expand, onClick, ariaExpanded }) => {
  return (
    <IconButton
      className="expand-icon"
      onClick={onClick}
      aria-expanded={ariaExpanded}
      aria-label="show more"
    >
      <ExpandMoreIcon />
    </IconButton>
  );
};

const Projects = ({ title, subheader, imageUrl, description, method }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="card-container" sx={{ maxWidth: 345 }}>
      <CardHeader
        className="card-header"
        avatar={
          <Avatar sx={{ bgcolor: red[500] }}>
            {title ? title.charAt(0) : ""}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={title}
        subheader={subheader}
      />
      <CardMedia
        className="card-image"
        component="img"
        height="194"
        image={imageUrl}
        alt={title}
      />
      <CardContent className="card-content">
        <Typography
          variant="body2"
          color="text.secondary"
          className="card-description"
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className="card-actions">
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          ariaExpanded={expanded}
        />
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{method}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Projects;
