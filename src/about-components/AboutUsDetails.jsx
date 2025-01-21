import React from "react";
import {
  Container,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const AboutUsDetails = () => {
  return (
    <Container sx={{ py: 6, backgroundColor: "#affff880" }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#003366",
          mb: 4,
          fontFamily: "Smooch Sans, sans-serif",
        }}
      >
        About BharatSecure
      </Typography>
      <Box sx={{ lineHeight: 1.8, color: "#555" }}>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Welcome to BharatSecure, your trusted partner in transforming the way
          incidents are reported and managed. Our mission is simple: to provide
          a platform that's not only easy to use but also highly effective in
          ensuring every voice is heard and every incident is addressed
          promptly. At BharatSecure, we understand that in times of distress,
          quick and efficient communication can make all the difference. Our
          platform is designed to bridge the gap between individuals and
          authorities, ensuring that every report is taken seriously and acted
          upon swiftly. Whether you're reporting an issue via text or voice, our
          system guarantees that your concerns are delivered directly to the
          relevant responders in real time. We believe that safety is a
          fundamental right, and our goal is to empower communities by offering
          a transparent, accessible, and inclusive reporting tool. By leveraging
          the latest technology, we aim to create a secure environment where
          everyone feels confident and supported in taking action. Our
          commitment to innovation drives us to continuously enhance our
          platform, ensuring that it remains at the forefront of incident
          reporting and management. Join us on this journey to build safer, more
          resilient communities—one report at a time. Together, we can make a
          meaningful difference and ensure that no voice goes unheard.
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#003366",
            mb: 3,
            fontFamily: "Smooch Sans, sans-serif",
          }}
        >
          Our Mission
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          At BharatSecure, we believe in creating a secure and responsive
          environment for everyone. Our platform bridges the gap between
          individuals and authorities, fostering trust and promoting swift
          action when it matters most.
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#003366",
            mb: 3,
            fontFamily: "Smooch Sans, sans-serif",
          }}
        >
          Core Features
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Here's what makes BharatSecure stand out:
        </Typography>
        <List sx={{ mb: 3 }}>
          <ListItem>
            <ListItemText primary="🚨 Real-time alerts and notifications for quick responses." />
          </ListItem>
          <ListItem>
            <ListItemText primary="📊 Heatmap analytics to visualize incident trends." />
          </ListItem>
          <ListItem>
            <ListItemText primary="🔍 End-to-end tracking for transparency and accountability." />
          </ListItem>
          <ListItem>
            <ListItemText primary="📂 Categorization and filtering for efficient management." />
          </ListItem>
          <ListItem>
            <ListItemText primary="📞 Emergency contact alerts for timely assistance." />
          </ListItem>
        </List>

        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#003366",
            mb: 3,
            fontFamily: "Smooch Sans, sans-serif",
          }}
        >
          Future Goals
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Looking ahead, we're excited about what the future holds:
        </Typography>
        <List sx={{ mb: 3 }}>
          <ListItem>
            <ListItemText primary="💡 Advanced analytics and AI insights to anticipate potential incidents." />
          </ListItem>
          <ListItem>
            <ListItemText primary="🎨 Intuitive interfaces and personalized features to enhance user experience." />
          </ListItem>
          <ListItem>
            <ListItemText primary="🤝 Expanding collaborations with more communities and organizations." />
          </ListItem>
          <ListItem>
            <ListItemText primary="📚 Educational resources to promote awareness and preparedness." />
          </ListItem>
        </List>

        <Typography variant="body1">
          Together, let's build a safer and more connected world. Join us on
          this journey to make a meaningful impact and ensure everyone feels
          secure and empowered.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUsDetails;
