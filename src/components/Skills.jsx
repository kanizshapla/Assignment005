import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import "../styles/skills.css";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Skills({ title, subtitle, description }) {
  const card = (
    <React.Fragment>
      <CardContent className="card-content">
        <Typography className="card-title" color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="div" className="card-subtitle">
          {subtitle}
        </Typography>
        <Typography className="card-description" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2">
          Customize this content as needed.
          <br />
          {'"Additional information goes here"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <Box className="card-container" sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
