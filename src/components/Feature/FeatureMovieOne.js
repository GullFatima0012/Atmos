"use client";

import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { Video, Volume2, Headphones } from "lucide-react";

const features = [
  {
    title: "3D Spatial Audio",
    description: "Surround sound that moves with you.",
    icon: <Headphones size={48} color="black" />,
    gradient: "linear-gradient(135deg,rgb(154, 193, 255), #9333ea)",
  },
  {
    title: "Deep Bass Boost",
    description: "Feel the rumble with ultra-low frequencies.",
    icon: <Volume2 size={48} color="black" />,
    gradient: "linear-gradient(135deg, #059669,rgb(169, 234, 226))",
  },
  {
    title: "Cinematic Clarity",
    description: "Theater-quality sound in your living room.",
    icon: <Video size={48} color="black" />,
    gradient: "linear-gradient(135deg, #dc2626,rgb(250, 170, 113))",
  },
];

export default function FeatureMovieOne() {
  return (
    <Box sx={{ backgroundColor: "#F1EFE7", py:2,px:3, textAlign: "center" }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 4,
          color: "#333",
          textTransform: "uppercase",
          letterSpacing: 1.5,
        }}
      >
        More Reasons to Join Atmos
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                borderRadius: "20px",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 24px rgba(0, 0, 0, 0.25)",
                },
              }}
            >
              <CardContent
                sx={{
                  p: 4,
                  textAlign: "center",
                  color: "#fff",
                  borderRadius: "20px 20px 0 0",
                  background: feature.gradient,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", mb: 1, color: "black" }}
                >
                  {feature.title}
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.8, color: "black" }}>
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
