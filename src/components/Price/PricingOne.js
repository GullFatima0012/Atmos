import { Box } from "@mui/material";
import PricingList from "./PricingList";

export default function PriceOne() {
  return (
    <Box
    sx={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      border: "15px solid",
  borderImage: "linear-gradient(to top left,rgba(147, 10, 10, 0.42), white) 1",
      justifyContent: "center",
      bgcolor: "#F5F3EB",
      position: "relative", // ✅ Added for positioning the button
    }}
  >
      <PricingList />
      
      </Box>
  );
}
