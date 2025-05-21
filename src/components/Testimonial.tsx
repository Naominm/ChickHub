import { Box } from "@mui/material";
import CardTextSection from "./card";
import TesitimonialCard from "./testimonialCard";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

function TestimonialSection() {
  return (
    <Box
      component="div"
      minHeight="35rem"
      id="testimonial"
      sx={{ backgroundColor: "var(--bg)" }}
    >
      <CardTextSection
        heading="What People Say"
        subHeading="Don't just take our word for it - hear from the farmers and businesses who have"
        subHeading2="worked with us."
      />
      <Box
        component="div"
        display="flex"
        justifyContent="center"
        gap="1rem"
        mt="10"
        sx={{
          flexDirection: { xs: "column", md: "row" },
          padding: { xs: "1rem", md: "none" },
        }}
      >
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
        <TesitimonialCard
          icon={
            <FormatQuoteIcon
              sx={{ bgcolor: "#fff", color: "var(--primary)" }}
            />
          }
          text="Naomi built our business website and the results have been amazing. Her attention to detail and understanding of our needs exceeded our expectations."
          name="Michael chen"
          position="Business Owner, California"
        />
        <TesitimonialCard
          icon={
            <FormatQuoteIcon
              sx={{ bgcolor: "#fff", color: "var(--primary)" }}
            />
          }
          text="The market linkage feature has connected me with buyers I wouldn't have found otherwise. My sales have increased and I'm getting better prices for my products"
          name="Mary Wangui"
          position="Poultry Farmer, Kenya"
        />
      </Box>
    </Box>
  );
}

export default TestimonialSection;
