import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import Link from "next/link";
import { Button, Box, Container} from "@mui/material";
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
          bgcolor: "#F1EFE7",
          position: "relative", // ✅ Added for positioning the button
        }}
      >
   <Container sx={{    display: 'flex',
            justifyContent: 'center',
            flexDirection:'column',
            alignItems: 'center'}} >
  <Image src={logo} alt="Logo" width={150} height={50} />
<br/>
  <Link 
   className="btn bg-dark text-light btn-lg px-3"
   role="button"
   href="register"
  
   variant="contained" >
           Get Started
          </Link>

   </Container>
     </Box>
     </>
  );}