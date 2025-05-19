import { Box, Typography } from "@mui/material";
function FeaturesSection() {
  return (
    <Box component="div" sx={{ backgroundColor: "var(--bgAccent)" }}>
      <TextSection />
      <CardSection />
    </Box>
  );
}

function TextSection() {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        minHeight: "30rem",
        textAlign: "center",
        padding: "5rem",
      }}
    >
      <Typography
        variant="h4"
        sx={{ color: "var(--primary)", fontWeight: "800" }}
      >
        What ChickHub Offers
      </Typography>
      <Typography
        variant="h6"
        fontSize="1rem"
        sx={{ color: "var(--text-light)" }}
      >
        Comprehensive tools designed specifically for poultry farmers to improve{" "}
        <br /> productivity and profitability.
      </Typography>
    </Box>
  );
}

function CardSection() {
  return <Box component="div"></Box>;
}

export default FeaturesSection;
