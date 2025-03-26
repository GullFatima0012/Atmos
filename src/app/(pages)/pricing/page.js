import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import PricingTwo from "@/components/Price/PriceingTwo";
import { TextField, Button, Typography, Box, InputAdornment, IconButton, Container, Paper, Alert } from "@mui/material";

export default function Playlist() {

  return (
    <>
    <HeaderOne />
       <Box
   sx={{
     width: "100vw",
     maxWidth: "100%",
     minHeight: "100vh", // Changed from fixed height to minimum height
     display: "flex",
     flexDirection: "column",
     alignItems: "center",
     borderRadius: "10px",
     border: "15px solid",
     borderImage: "linear-gradient(to top left, rgba(112, 109, 109, 0.42), white) 1",
     justifyContent: "flex-start", // Changed from center to flex-start
     bgcolor: "#F1EFE7",
     position: "relative",
     overflow: "visible", // Allow content to overflow if needed
   }}
 >
      {/* <!-- Start Main --> */}
  
        <PricingTwo />
        <FooterOne/>
   </Box>
    </>
  );
}
