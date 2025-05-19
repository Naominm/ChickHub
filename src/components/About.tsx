import { Box, Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
function AboutSection() {
  return (
    <Box
      component="div"
      sx={{ display: "flex", gap: "3rem", alignItems: "center" }}
    >
      <ImageSection />
      <TextSection />
    </Box>
  );
}

function ImageSection() {
  return <Box component="div"></Box>;
}

function TextSection() {
  return (
    <Box component="div">
      <Typography variant="h5" sx={{ color: "var(--primary)" }}>
        How ChickHub Supports Farmers
      </Typography>
      <Typography variant="body2">
        ChickHub is designed with small to medium-scale poultry farmers in mind.
        We understand the unique challenges you face and have built solutions to
        address them.
      </Typography>
      <Typography>
        <CheckCircleIcon />
        Simplified Record Keeping <br />
        No more paper records or complicated spreadsheets.
      </Typography>
      <Typography>
        <CheckCircleIcon />
        Data-Driven Decisions <br />
        Access insights that help you optimize your operations.
      </Typography>
      <Typography>
        <CheckCircleIcon />
        Community Support <br />
        Connect with other farmers to share knowledge and experiences.
      </Typography>
      <Button variant="contained" sx={{ backgroundColor: "var(--primary)" }}>
        See How It Works
      </Button>
    </Box>
  );
}

export default AboutSection;
