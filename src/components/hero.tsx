import { Typography, Box } from "@mui/material";
function HeroSection() {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        minHeight: "80vh",
        gap: "5rem",
        padding: "2rem",
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
    <Box component="div" width="50%" sx={{ border: "2px solid red" }}>
      <Typography>Text section</Typography>
    </Box>
  );
}
function ImageSection() {
  return (
    <Box component="div" width="50%" sx={{ border: "2px solid red" }}>
      <Typography>Image Section</Typography>
    </Box>
  );
}

export default HeroSection;
