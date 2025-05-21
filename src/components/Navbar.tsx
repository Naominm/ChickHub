import { ReactNode, useState, MouseEvent } from "react";
import {
  Box,
  AppBar,
  Typography,
  MenuItem,
  Button,
  IconButton,
  Menu,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function NavBar() {
  const menuItems = [
    { text: "Home", to: "/" },
    { text: "Features", to: "/products" },
    { text: "About", to: "/about" },
    { text: "Contact", to: "/contact" },
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
              sx={{
                backgroundColor: "var(--primary)",
                "&:hover": { backgroundColor: "var(--hover)" },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton onClick={handleMenuOpen} edge="start" color="inherit">
            <MenuIcon sx={{ color: "var(--primary)" }} />
          </IconButton>
          <Menu anchorEl={anchorEl} open={isMenuOpen} onClose={handleMenuClose}>
            {menuItems.map((item) => (
              <MenuItem
                key={item.text}
                component={Link}
                to={item.to}
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
