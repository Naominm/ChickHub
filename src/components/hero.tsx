import { Typography, Box, Button } from "@mui/material";
import FarmImage from "../assets/farm.jpg";

function HeroSection() {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginTop: "5rem",
        minHeight: "80vh",
        gap: "2rem",
        padding: "2rem",
        backgroundColor: "#fff",
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
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "2rem",
        width: { xs: "100%", md: "50%" },
      }}
    >
      <Typography
        variant="h4"
        fontWeight={800}
        sx={{ color: "var(--primary)", fontSize: { xs: "1rem", md: "2rem" } }}
      >
        Welcome to Chick Hub{" "}
        <span style={{ color: "var(--secondary)" }}>
          Empowering Poultry Farmers
        </span>
      </Typography>
      <Typography
        variant="h6"
        fontWeight={400}
        sx={{ fontSize: { xs: "0.8rem", md: "1rem" } }}
      >
        Smart tools to manage your flock, boost productivity, and connect to
        markets.
      </Typography>
      <Box sx={{ display: "flex", gap: { xs: "1rem", md: "2rem" } }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "var(--primary)",
            "&:hover": { backgroundColor: "var(--hover)" },
          }}
        >
          Get started
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "var(--primary)",
            border: "2px solid var(--primary)",
            "&:hover": { backgroundColor: "var(--primary)", color: "#fff" },
          }}
        >
          Explore more
        </Button>
      </Box>
    </Box>
  );
}
function ImageSection() {
  return (
    <Box component="div" sx={{ width: { xs: "100%", md: "50%" } }}>
      <Box
        component="img"
        src={FarmImage}
        sx={{
          width: { xs: "100%", md: "100%" },
          border: "none",
          height: { xs: "auto", md: "350px" },
          objectFit: "cover",
          objectPosition: "center-bottom",
        }}
      ></Box>
    </Box>
  );
}

export default HeroSection;
