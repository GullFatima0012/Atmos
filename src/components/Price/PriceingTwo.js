import PricingList from "./PricingList";
import HeaderOne from "@/components/Header/HeaderOne";
import { Box } from "@mui/material";
export default function PricingTwo() {
  return (
      <>
        <HeaderOne  />
  
        {/* <!-- Start Main --> */}
     
        <Box
  sx={{
    maxWidth: "100%", // Prevents overflow
    height: "100%",
    display: "flex",
    alignItems: "center",
    border: "15px solid",
    borderImage: "linear-gradient(to top left,rgba(112, 109, 109, 0.42), white) 1",
    justifyContent: "center",
    bgcolor: "#F5F3EB",
    position: "relative",
  }}
>

  <PricingList />
</Box>

 </>
  );
}
