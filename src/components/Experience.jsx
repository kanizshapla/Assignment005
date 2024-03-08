import { Grid } from "@mui/material";
import React from "react";
import Heading from "./Heading";
import Skills from "./Skills";

export default function Experience() {
  return (
    <>
      <Heading title="experience" />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Skills
            title="Odyssey Apps Ltd"
            subtitle="IT Management Executive"
            description="Worked as IT Management Executive at Odyssey Apps Limited. (2019-2020)"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Skills
            title="Aurora Consulting"
            subtitle="Software Engineer"
            description="Worked as Software Engineer at Aurora Consulting from November 3, 2022 to January 2023"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Skills
            title="Town Hall Plus"
            subtitle="Software Engineer"
            description="Working as Software Engineer at Townhall Plus from February,2024"
          />
        </Grid>
      </Grid>
    </>
  );
}
