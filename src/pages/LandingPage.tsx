import { Box } from "@mui/material";
import NavBar from "../components/Navbar";
import HeroSection from "../components/hero";
import FeaturesSection from "../components/Features";
import AboutSection from "../components/About";
function LandingPage() {
  return (
    <Box component="div">
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
    </Box>
  );
}

export default LandingPage;
