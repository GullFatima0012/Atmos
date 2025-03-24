
import HeaderOne from "@/components/Header/HeaderOne";
import AboutOne from "@/components/About/AboutOne";
import { Button, Box, Container} from "@mui/material";
import logo from "@/../public/assets/images/logo.svg";

import Image from "next/image";
export default function About() {

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
          bgcolor: "#F1EFE7",
          position: "relative", // ✅ Added for positioning the button
        }}
      >
  


    
        <AboutOne />
        </Box>
    </>
  );
}
