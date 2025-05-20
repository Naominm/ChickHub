import { Box } from "@mui/material";
import CardTextSection from "./card";
import TesitimonialCard from "./testimonialCard";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

function TestimonialSection() {
  return (
    <Box component="div">
      <CardTextSection
        heading="What People Say"
        subHeading="Don't just take our word for it - hear from the farmers and businesses who have"
        subHeading2="worked with us."
      />
      <TesitimonialCard icon={<FormatQuoteIcon />} />
    </Box>
  );
}

export default TestimonialSection;
