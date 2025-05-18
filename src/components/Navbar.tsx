import { Box, AppBar, Typography } from "@mui/material";

function NavBar() {
  return (
    <Box
      component="div"
      sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
    >
      <AppBar sx={{ backgroundColor: "teal", padding: 2 }}>
        <Box
          component="div"
          display="flex"
          sx={{ alignItems: "center", gap: "2rem" }}
        >
          <Typography variant="h3" fontSize="1.5rem" fontWeight="800">
            ChickHub
          </Typography>
          <Box
            component="div"
            display="flex"
            gap="3rem"
            paddingLeft={{ md: "50%", xs: "10%" }}
          >
            <Typography variant="h6" fontSize="1rem" fontWeight="600">
              Home
            </Typography>
            <Typography variant="h6" fontSize="1rem" fontWeight="600">
              Product
            </Typography>
            <Typography variant="h6" fontSize="1rem" fontWeight="600">
              About
            </Typography>
            <Typography variant="h6" fontSize="1rem" fontWeight="600">
              Contact
            </Typography>
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
}

export default NavBar;
