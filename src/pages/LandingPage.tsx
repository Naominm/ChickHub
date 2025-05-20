import { Box } from "@mui/material";
import NavBar from "../components/Navbar";
import HeroSection from "../components/hero";
import FeaturesSection from "../components/Features";
import AboutSection from "../components/About";
import TestimonialSection from "../components/Testimonial";
function LandingPage() {
  return (
    <Box component="div">
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <TestimonialSection />
    </Box>
  );
}

export default LandingPage;
