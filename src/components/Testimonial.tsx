import { Box } from "@mui/material";
import CardTextSection from "./card";
import TesitimonialCard from "./testimonialCard";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

function TestimonialSection() {
  return (
    <Box
      component="div"
      minHeight="35rem"
      sx={{ backgroundColor: "var(--bg)" }}
    >
      <CardTextSection
        heading="What People Say"
        subHeading="Don't just take our word for it - hear from the farmers and businesses who have"
        subHeading2="worked with us."
      />
      <Box component="div" display="flex" justifyContent="center" mt="10">
        <TesitimonialCard
          icon={
            <FormatQuoteIcon
              sx={{ bgcolor: "#fff", color: "var(--primary)" }}
            />
          }
          text="ChickHub has revolutionized how I manage my poultry farm. The productivity tracking features alone have helped me increase my egg production by 15%."
          name="Sarah Johnson"
          position="Poultry Farmer, Texas"
        />
      </Box>
    </Box>
  );
}

export default TestimonialSection;
