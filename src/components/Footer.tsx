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
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "2rem", md: "15rem" },
          mb: "1rem",
        }}
      >
        <Typography
          variant="body2"
          sx={{ fontSize: "1rem", color: "var(--bgAccent)" }}
        >
          Empowering Poultry Farmers
        </Typography>
        <Box
          component="div"
          sx={{ display: "flex", gap: "1rem", color: "var(--accent)" }}
        >
          <Typography
            variant="h6"
            fontSize="1rem"
            component="a"
            href="#home"
            sx={{ textDecoration: "none", color: "var(--bg)" }}
          >
            Home
          </Typography>
          <Typography
            variant="h6"
            fontSize="1rem"
            component="a"
            href="#about"
            sx={{ textDecoration: "none", color: "var(--bg)" }}
          >
            About
          </Typography>
          <Typography
            variant="h6"
            fontSize="1rem"
            component="a"
            href="feature"
            sx={{ textDecoration: "none", color: "var(--bg)" }}
          >
            Features
          </Typography>
          <Typography
            variant="h6"
            fontSize="1rem"
            component="a"
            href="contact"
            sx={{ textDecoration: "none", color: "var(--bg)" }}
          >
            Contact
          </Typography>
        </Box>
        <Box component="div" sx={{ display: "flex", gap: "1rem" }}>
          <Typography
            variant="h6"
            color="#fff"
            component="a"
            href="https://www.linkedin.com/in/mbugua-naomi"
            target="_blank"
          >
            <LinkedInIcon sx={{ "& hover": { color: "var(--bg)" } }} />
          </Typography>
          <Typography
            variant="h6"
            color="#fff"
            component="a"
            href="https://github.com/Naominm"
            target="_blank"
          >
            <GitHubIcon sx={{ "& hover": { color: "var(--bg)" } }} />
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
      <Typography
        variant="body2"
        fontSize="1rem"
        sx={{ textAlign: "center", mt: 2, color: "var(--accent)" }}
      >
        &copy; 2025 ChickHub. All rights reserved.
      </Typography>
      <Typography
        variant="body2"
        fontSize="1rem"
        sx={{ textAlign: "center", color: "var(--accent)" }}
      >
        Designed and Developed by Naomi
      </Typography>
    </Box>
  );
}

export default FooterSection;
