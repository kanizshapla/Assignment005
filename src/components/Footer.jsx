import { Box, Container, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f8f8f8",
        padding: "20px",
        marginTop: "50px",
        textAlign: "center",
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Your Website Name
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={2}>
          Created with love using React and Material-UI
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={2}>
          <Link href="#" color="inherit">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link href="#" color="inherit">
            Terms of Service
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
