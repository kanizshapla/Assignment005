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
import "../styles/contact.css";

const contactData = [
  {
    name: "Kaniz Fatema",
    email: "kanizshapla@gmail.com",
    phone: "123-456-7890",
    address: "Dhaka 1212",
    linkedin: "https://www.linkedin.com/in/kanizshapla46",
    github: "https://github.com/kanizshapla",
  },
];

const Contact = () => {
  const contact = contactData[0]; // Assuming only one contact in the array

  return (
    <div className="contact-container">
      <Typography variant="h4" className="contact-header">
        Contact Information
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} className="contact-paper">
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
    <Grid container spacing={1} alignItems="center" className="contact-info">
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
