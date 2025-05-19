import { Box, AppBar, Typography, MenuItem, Button } from "@mui/material";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Box
      component="div"
      sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
    >
      <AppBar sx={{ backgroundColor: "#fff", padding: 2 }} elevation={0}>
        <Box
          component="div"
          display="flex"
          sx={{ alignItems: "center", gap: "2rem" }}
        >
          <Typography variant="h3">
            <MenuItem
              sx={{
                color: "var(--primary)",
                fontWeight: "800",
                fontSize: "1.2rem",
              }}
            >
              Chick <span style={{ color: "var(--secondary)" }}>Hub</span>
            </MenuItem>
          </Typography>
          <Box
            component="div"
            display="flex"
            gap="2rem"
            paddingLeft={{ md: "30%", xs: "10%" }}
            sx={{
              textTransform: "uppercase",
              fontWeight: "800",
              color: "var(--text-dark)",
            }}
          >
            <MenuItem component={Link} to="/" sx={{ fontSize: "0.8rem" }}>
              Home
            </MenuItem>
            <MenuItem
              component={Link}
              to="/products"
              sx={{ fontSize: "0.8rem" }}
            >
              Features
            </MenuItem>
            <MenuItem component={Link} to="/about" sx={{ fontSize: "0.8rem" }}>
              About
            </MenuItem>
            <MenuItem
              component={Link}
              to="/contact"
              sx={{ fontSize: "0.8rem" }}
            >
              Contact
            </MenuItem>
            <Button
              variant="contained"
              sx={{ backgroundColor: "var(--primary)" }}
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
}

export default NavBar;
