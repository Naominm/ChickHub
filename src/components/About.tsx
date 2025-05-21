import { Box, Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Hens from "../assets/kuku.jpeg";
function AboutSection() {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: "3rem",
        alignItems: "center",
        mt: 8,
        mb: 5,
        px: "1rem",
      }}
    >
      <ImageSection />
      <TextSection />
    </Box>
  );
}

function ImageSection() {
  return (
    <Box
      component="img"
      src={Hens}
      sx={{
        width: { xs: "100%", md: "50%" },
        objectFit: "cover",
        borderRadius: "1rem",
      }}
    ></Box>
  );
}

function TextSection() {
  return (
    <Box
      component="div"
      sx={{
        width: { xs: "100%", md: "50%" },
        display: "flex",
        flexDirection: "column",
        padding: { xs: 2, md: "none" },
        gap: "1rem",
      }}
    >
      <Typography
        variant="h5"
        sx={{ color: "var(--primary)", fontWeight: 800 }}
      >
        How ChickHub Supports Farmers
      </Typography>
      <Typography variant="body2">
        ChickHub is designed with small to medium-scale poultry farmers in mind.
        We understand the unique challenges you face and have built solutions to
        address them.
      </Typography>
      <Typography
        variant="body2"
        sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
      >
        <CheckCircleIcon sx={{ color: "var(--secondary)" }} />
        Simplified Record Keeping <br />
        No more paper records or complicated spreadsheets.
      </Typography>
      <Typography
        variant="body2"
        sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
      >
        <CheckCircleIcon sx={{ color: "var(--secondary)" }} />
        Data-Driven Decisions <br />
        Access insights that help you optimize your operations.
      </Typography>
      <Typography
        variant="body2"
        sx={{ display: "flex", alignItems: "center", gap: "1.5rem" }}
      >
        <CheckCircleIcon sx={{ color: "var(--secondary)" }} />
        Community Support <br />
        Connect with other farmers to share knowledge and experiences.
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "var(--primary)",
          width: "15rem",
          mt: 3,
          "&:hover": { backgroundColor: "var(--hover)" },
        }}
      >
        See How It Works
      </Button>
    </Box>
  );
}

export default AboutSection;
