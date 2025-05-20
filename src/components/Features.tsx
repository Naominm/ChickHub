import { Box } from "@mui/material";
import CardTextSection from "./card";

function FeaturesSection() {
  return (
    <Box component="div" sx={{ backgroundColor: "var(--bgAccent)" }}>
      <CardTextSection
        heading="What ChickHub Offers"
        subHeading="Comprehensive tools designed specifically for poultry farmers to improve"
        subHeading2="productivity and profitability."
      />
    </Box>
  );
}

export default FeaturesSection;
