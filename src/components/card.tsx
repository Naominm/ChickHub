import { Box, Typography } from "@mui/material";

interface titleSectionProps {
  heading: String;
  subHeading: String;
  subHeading2: String;
}

function CardTextSection({
  heading,
  subHeading,
  subHeading2,
}: titleSectionProps) {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        textAlign: "center",
        padding: "1rem",
        pt: 10,
      }}
    >
      <Typography
        variant="h4"
        sx={{ color: "var(--primary)", fontWeight: "800" }}
      >
        {heading}
      </Typography>
      <Typography
        variant="h6"
        fontSize="1rem"
        sx={{ color: "var(--text-light)" }}
      >
        {subHeading} <br /> {subHeading2}
      </Typography>
    </Box>
  );
}

export default CardTextSection;
