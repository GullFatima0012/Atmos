import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import MovieList from "@/components/Movie/MovieList";
import { Button, Box } from "@mui/material";
export default function Movies() {

  return (
    <>
      <HeaderOne  />

      {/* <!-- Start Main --> */}
   
      <Box
  sx={{
    maxWidth: "100%", // Prevents overflow
    width: "100vw",
    height: "100%",
    display: "flex",
    alignItems: "center",
    border: "15px solid black",
borderImage: "linear-gradient(to top left,rgba(112, 109, 109, 0.42), white) 1",
    justifyContent: "center",
    bgcolor: "#F5F3EB",
    position: "relative", // ✅ Added for positioning the button
  }}
>
<main className="main">
        <MovieList />
  </main>

</Box>
 </>
  );
}
