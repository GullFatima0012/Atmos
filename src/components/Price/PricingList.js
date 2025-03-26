import Image from "next/image";
import { Box, Grid, Card, CardContent, Typography, Button } from "@mui/material";
import pricing from "@/data/pricing";
import '@/../public/assets/css/globals.css';
export default function PricingList() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } ,mt: {xs:10, sm:5},  fontFamily: '"SF Pro Display", sans-serif' ,textAlign: "center", px: { xs: 2, md: 4 } }}>
      <Typography variant="h4"  fontFamily='"SF Pro Display", sans-serif'  fontWeight={600} gutterBottom color="black">
        {pricing.title}
      </Typography>
      <Typography variant="subtitle1" fontFamily='"SF Pro Display", sans-serif'  color="text.secondary" paragraph>
        {pricing.description}
      </Typography>

      <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
        {pricing.items?.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={6}>
            <Card
              sx={{
                borderRadius: 3,
                fontFamily: '"SF Pro Display", sans-serif' ,
                textAlign: "center",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                transition: "0.3s",
                "&:hover": { transform: "scale(1.05)" },
                p: { xs: 2, md: 3 }, // Adjust padding for responsiveness
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                <Image src={item.image} alt={item.title} width={80} height={80} />
              </Box>
              <CardContent>
                <Typography  fontFamily='"SF Pro Display", sans-serif'  variant="h6" fontWeight={600} gutterBottom>
                  {item.title}
                </Typography>
                <Typography  fontFamily='"SF Pro Display", sans-serif'  variant="h5" color="primary" fontWeight={700}>
                  {item.price}
                </Typography>
                <Typography  fontFamily='"SF Pro Display", sans-serif'  variant="body2" color="text.secondary" gutterBottom>
                  {item.type}
                </Typography>
                <Box component="ul" sx={{ listStyle: "none", padding: 0, mt: 1 }}>
                  {item.features?.map((feature, key) => (
                    <Typography  fontFamily='"SF Pro Display", sans-serif'  component="li" key={key} sx={{ mb: 0.5 }}>
                      {feature}
                    </Typography>
                  ))}
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  fontFamily='"SF Pro Display", sans-serif' 
                  fullWidth
                  sx={{ mt: 2, py: 1.5, fontSize: "1rem", fontWeight: 600 }}
                >
                  {item.btnText}
                </Button>
                <Typography  fontFamily='"SF Pro Display", sans-serif' variant="caption" display="block" color="text.secondary" sx={{ mt: 2 }}>
                  {item.promotionText}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
