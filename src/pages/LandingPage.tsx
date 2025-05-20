import { Box } from "@mui/material";
import NavBar from "../components/Navbar";
import HeroSection from "../components/hero";
import FeaturesSection from "../components/Features";
import AboutSection from "../components/About";
import TestimonialSection from "../components/Testimonial";
import ContactSection from "../components/ContactSection";
function LandingPage() {
  return (
    <Box component="div">
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <TestimonialSection />
      <ContactSection />
    </Box>
  );
}

export default LandingPage;
