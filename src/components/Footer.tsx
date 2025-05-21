import { Box, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function FooterSection() {
  return (
    <Box
      component="div"
      sx={{ backgroundColor: "var(--primary)", px: "2rem", py: "2rem" }}
    >
      <Box component="div" className="row-1">
        <Typography
          variant="h5"
          sx={{ textTransform: "uppercase", color: "#fff", fontWeight: "700" }}
        >
          Chick <span style={{ color: "var(--secondary)" }}>Hub</span>
        </Typography>
      </Box>
      <Box
        component="div"
        className="row-2"
        sx={{ display: "flex", gap: "15rem ", mb: "1rem" }}
      >
        <Typography variant="h6" sx={{ fontSize: "1rem", color: "#fff" }}>
          Empowering Poultry Farmers
        </Typography>
        <Box
          component="div"
          sx={{ display: "flex", gap: "1rem", color: "#fff" }}
        >
          <Typography variant="h6" fontSize="1rem">
            Home
          </Typography>
          <Typography variant="h6" fontSize="1rem">
            About
          </Typography>
          <Typography variant="h6" fontSize="1rem">
            Features
          </Typography>
          <Typography variant="h6" fontSize="1rem">
            Contact
          </Typography>
        </Box>
        <Box component="div" sx={{ display: "flex", gap: "1rem" }}>
          <Typography variant="h6" color="#fff">
            <LinkedInIcon />
          </Typography>
          <Typography variant="h6" color="#fff">
            <GitHubIcon />
          </Typography>
        </Box>
      </Box>
      <hr
        style={{
          border: "none",
          height: "0.5px",
          backgroundColor: "var(--accent)",
        }}
      />
    </Box>
  );
}

export default FooterSection;
