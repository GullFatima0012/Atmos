"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import "@/../public/assets/css/globals.css";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import data from "@/data/about";

export default function AboutOne() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 960); // MUI's md breakpoint
    };

    // Check initial size
    checkMobile();

    // Add event listener
    window.addEventListener("resize", checkMobile);

    // Cleanup listener
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <Box
      sx={{
        py: isMobile ? 5 : 11.25,
        backgroundColor: "#F1EFE7",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            mt: isMobile ? 8 : 16,
          }}
        >
          <Typography
            variant={isMobile ? "h4" : "h3"}
            sx={{
              fontFamily: '"SF Pro Display", sans-serif',
              color: "black",
              mb: 1,
              maxWidth: isMobile ? "100%" : "80%",
              wordWrap: "break-word",
            }}
          >
            {data.title}
          </Typography>

          <Typography
            variant={isMobile ? "body2" : "body1"}
            sx={{
              fontFamily: '"SF Pro Display", sans-serif',
              color: "black",
              mb: 5,
              maxWidth: isMobile ? "100%" : "70%",
              lineHeight: 1.6,
            }}
          >
            {data.descriptionOne}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
