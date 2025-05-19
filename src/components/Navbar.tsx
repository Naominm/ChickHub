import { Box, AppBar, Typography, MenuItem, Menu } from "@mui/material";
import { Link } from "react-router";
// import {Link} from "react-router"

function NavBar() {
  return (
    <Box
      component="div"
      sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
    >
      <AppBar sx={{ backgroundColor: "var(--primary)", padding: 2 }}>
        <Box
          component="div"
          display="flex"
          sx={{ alignItems: "center", gap: "2rem" }}
        >
          <Typography variant="h3" fontSize="1.2rem" fontWeight="600">
            <MenuItem>ChickHub</MenuItem>
          </Typography>
          <Box
            component="div"
            display="flex"
            gap="2rem"
            paddingLeft={{ md: "40%", xs: "10%" }}
            sx={{ textTransform: "uppercase", fontWeight: "700" }}
          >
            <MenuItem component={Link} to="/" sx={{ fontSize: "0.9rem" }}>
              Home
            </MenuItem>
            <MenuItem
              component={Link}
              to="/products"
              sx={{ fontSize: "0.9rem" }}
            >
              Products
            </MenuItem>
            <MenuItem component={Link} to="/about" sx={{ fontSize: "0.9rem" }}>
              About
            </MenuItem>
            <MenuItem
              component={Link}
              to="/contact"
              sx={{ fontSize: "0.9rem" }}
            >
              Contact
            </MenuItem>
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
}

export default NavBar;
