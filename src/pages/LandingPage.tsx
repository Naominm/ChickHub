import { Box } from "@mui/material";
import NavBar from "../components/Navbar";
import HeroSection from "../components/hero";
import FeaturesSection from "../components/Features";
function LandingPage() {
  return (
    <Box component="div">
      <NavBar />
      <HeroSection />
      <FeaturesSection />
    </Box>
  );
}

export default LandingPage;
