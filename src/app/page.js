import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import Link from "next/link";
import { Button, Box, Container } from "@mui/material";
import logo from "@/../public/assets/images/logo.svg";

import Image from "next/image";
export default function Home() {
  return (
    <>
      <HeaderOne isHero={true} />
      <Box
    sx={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      border: "15px solid",
      borderImage: "linear-gradient(to top left,rgba(112, 109, 109, 0.42), white) 1",
      justifyContent: "center",
      position: "relative",
    }}
  >
    <Box
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "#F5F3EB",
        borderRadius: "8px", // Added 5px border radius
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image src={logo} alt="Logo" width={150} height={50} />
          <br />
          <Link
            className="btn bg-dark text-light btn-lg px-3"
            role="button"
            href="register"
            variant="contained"
            sx={{ fontFamily: '"SF Pro Display", sans-serif' }}
          >
            Get Started
          </Link>
        </Container>
      </Box>
      </Box>
    </>
  );
}
