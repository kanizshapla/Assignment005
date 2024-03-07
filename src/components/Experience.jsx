// Experience.jsx
import { Grid } from "@mui/material";
import React from "react";
import Skills from "./Skills";

export default function Experience() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Skills
          title="Odyssey Apps Ltd"
          subtitle="IT Management Executive"
          description="Description 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Skills
          title="Aurora Consulting"
          subtitle="Software Engineer"
          description="Description 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Skills
          title="Town Hall Plus"
          subtitle="Software Engineer"
          description="Description 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </Grid>
    </Grid>
  );
}
