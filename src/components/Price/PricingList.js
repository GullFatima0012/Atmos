import Image from "next/image";
import { Container, Grid, Card, CardContent, Typography, Button } from "@mui/material";
import pricing from "@/data/pricing";

export default function PricingList() {
  return (
    <Container maxWidth="lg" sx={{  backgroundColor: "#F1EFE7", textAlign: "center" }}>
      <Typography variant="h3" fontWeight={600} gutterBottom color="black">
        {pricing.title}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph>
        {pricing.description}
      </Typography>
      
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
        {pricing.items?.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                borderRadius: 3,
                textAlign: "center",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                transition: "0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <Image src={item.image} alt={item.title} width={80} height={80} style={{ margin: "20px auto" }} />
              <CardContent>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="h4" color="primary" fontWeight={700}>
                  {item.price}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {item.type}
                </Typography>
                <ul style={{ listStyle: "none", padding: 0, marginTop: 10 }}>
                  {item.features?.map((feature, key) => (
                    <li key={key} style={{ marginBottom: 5 }}>{feature}</li>
                  ))}
                </ul>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2, py: 1.5, fontSize: "1rem", fontWeight: 600 }}
                >
                  {item.btnText}
                </Button>
                <Typography variant="caption" display="block" color="text.secondary" sx={{ mt: 2 }}>
                  {item.promotionText}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
