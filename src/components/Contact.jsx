// Contact.jsx
import {
  ContactMail,
  Email,
  GitHub,
  LinkedIn,
  LocationOn,
  Phone,
} from "@mui/icons-material";
import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

const contactData = [
  {
    name: "Your Name",
    email: "your.email@example.com",
    phone: "123-456-7890",
    address: "Your Address",
    linkedin: "https://www.linkedin.com/in/your-linkedin",
    github: "https://github.com/your-github",
  },
];

const Contact = () => {
  const contact = contactData[0]; // Assuming only one contact in the array

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        Contact Information
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <ContactInfo
              icon={<ContactMail />}
              label="Name"
              value={contact.name}
            />
            <ContactInfo icon={<Email />} label="Email" value={contact.email} />
            <ContactInfo
              icon={<Phone />}
              label="Phone Number"
              value={contact.phone}
            />
            <ContactInfo
              icon={<LocationOn />}
              label="Address"
              value={contact.address}
            />
            <ContactInfo
              icon={<LinkedIn />}
              label="LinkedIn"
              value={contact.linkedin}
            />
            <ContactInfo
              icon={<GitHub />}
              label="GitHub"
              value={contact.github}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

const ContactInfo = ({ icon, label, value }) => {
  return (
    <Grid container spacing={1} alignItems="center">
      <Grid item>{icon}</Grid>
      <Grid item>
        <Typography variant="subtitle1">
          <strong>{label}:</strong> {value}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Contact;
