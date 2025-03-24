import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import PricingTwo from "@/components/Price/PriceingTwo";
import { TextField, Button, Typography, Box, InputAdornment, IconButton, Container, Paper, Alert } from "@mui/material";

export default function Playlist() {

  return (
    <>
      <HeaderOne/>
      {/* <!-- Start Main --> */}
      <main className="main">
        <PricingTwo />
      </main>

    </>
  );
}
