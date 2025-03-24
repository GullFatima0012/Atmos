import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import { TextField, Button, Typography, Box, InputAdornment, IconButton, Container, Paper, Alert } from "@mui/material";

import PrivacyPolicyContent from "@/components/Privacy/PrivacyPolicyContent";

export default function PrivacyPolicy() {

  return (
    <>
      <HeaderOne />
      <Box
    sx={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      border: "15px solid",
  borderImage: "linear-gradient(to top left,rgba(112, 109, 109, 0.42), white) 1",
      justifyContent: "center",
      bgcolor: "#F5F3EB",
      position: "relative", // ✅ Added for positioning the button
    }}
  >
      <main className="main">
        <PrivacyPolicyContent />
      </main>
    </Box>
    </>
  );
}
