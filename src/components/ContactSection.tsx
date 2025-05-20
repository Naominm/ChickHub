import { Box, Typography } from "@mui/material";

function ContactSection() {
  return (
    <Box
      component="div"
      sx={{
        minHeight: "30rem",
        paddingTop: 10,
        display: "flex",
        gap: "2rem",
        px: 5,
      }}
    >
      <ContactInformation />
      <FormInformation />
    </Box>
  );
}

function ContactInformation() {
  return (
    <Box
      component="div"
      sx={{
        width: "50%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Typography
        variant="h6"
        sx={{ color: "var(--primary)", fontWeight: 800 }}
      >
        Let's Work Together!
      </Typography>
      <Typography variant="h6" sx={{ fontSize: "1rem" }}>
        Have questions about ChickHub or interested in Naomi's web development
        services? Get in touch and I'll get back to you as soon as possible.
      </Typography>
    </Box>
  );
}

function FormInformation() {
  return <Box component="div" sx={{ width: "50%" }}></Box>;
}

export default ContactSection;
