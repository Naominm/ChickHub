import { Typography, Box, Button } from "@mui/material";
import FarmImage from "../assets/farm.jpg";

function HeroSection() {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginTop: "5rem",
        minHeight: "80vh",
        gap: "2rem",
        padding: "2rem",
        fontFamily: "var(--primaryFont",
      }}
    >
      <TextSection />
      <ImageSection />
    </Box>
  );
}

function TextSection() {
  return (
    <Box
      component="div"
      width="50%"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "2rem",
      }}
    >
      <Typography
        variant="h4"
        fontWeight={800}
        sx={{ color: "var(--primary)" }}
      >
        Welcome to Chick Hub{" "}
        <span style={{ color: "var(--secondary)" }}>
          Empowering Poultry Farmers
        </span>
      </Typography>
      <Typography variant="h6" fontWeight={400} fontSize="1rem">
        Smart tools to manage your flock, boost productivity, and connect to
        markets.
      </Typography>
      <Box sx={{ display: "flex", gap: "2rem" }}>
        <Button variant="contained" sx={{ backgroundColor: "var(--primary)" }}>
          Get started
        </Button>
        <Button
          variant="outlined"
          sx={{ color: "var(--primary)", border: "2px solid var(--primary)" }}
        >
          Explore more
        </Button>
      </Box>
    </Box>
  );
}
function ImageSection() {
  return (
    <Box component="div" width="50%">
      <Box
        component="img"
        src={FarmImage}
        sx={{
          width: { xs: "100%", md: "100%" },
          border: "none",
          height: { xs: "auto", md: "300px" },
          objectFit: "cover",
          objectPosition: "center-right",
        }}
      ></Box>
    </Box>
  );
}

export default HeroSection;
