import { useState, MouseEvent } from "react";
import {
  Box,
  AppBar,
  Typography,
  MenuItem,
  Button,
  IconButton,
  Menu,
} from "@mui/material";
// import {Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function NavBar() {
  const menuItems = [
    { text: "Home", href: "#home" },
    { text: "Features", href: "#feature" },
    { text: "About", href: "#about" },
    { text: "Contact", href: "#contact" },
  ];
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      component="div"
      sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
    >
      <AppBar sx={{ backgroundColor: "#fff", padding: 2 }} elevation={0}>
        <Box
          component="div"
          display="flex"
          sx={{ alignItems: "center", gap: "20rem" }}
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
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: "2rem",
              textTransform: "uppercase",
              fontWeight: 800,
              color: "var(--text-dark)",
            }}
          >
            {menuItems.map((item) => (
              <MenuItem
                key={item.text}
                component="a"
                href={item.href}
                sx={{ fontSize: "0.8rem" }}
              >
                {item.text}
              </MenuItem>
            ))}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "var(--primary)",
                "&:hover": { backgroundColor: "var(--hover)" },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "flex", md: "none", width: "100%", height: "1rem" },
          }}
        >
          <IconButton onClick={handleMenuOpen} edge="end" color="inherit">
            <MenuIcon sx={{ color: "var(--primary)" }} />
          </IconButton>
          <Menu anchorEl={anchorEl} open={isMenuOpen} onClose={handleMenuClose}>
            {menuItems.map((item) => (
              <MenuItem
                key={item.text}
                component="a"
                href={item.href}
                onClick={handleMenuClose}
              >
                {item.text}
              </MenuItem>
            ))}
            <MenuItem onClick={handleMenuClose}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "var(--primary)",
                  "&:hover": { backgroundColor: "var(--hover)" },
                }}
              >
                Get Started
              </Button>
            </MenuItem>
          </Menu>
        </Box>
      </AppBar>
    </Box>
  );
}

export default NavBar;
