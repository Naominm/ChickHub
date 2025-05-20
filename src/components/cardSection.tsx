import { Box, Typography, Card } from "@mui/material";
import { ReactNode } from "react";

interface CardSectionProps {
  title: string;
  Text: string;
  Icon: ReactNode;
}

function CardSection({ title, Text, Icon }: CardSectionProps) {
  return (
    <Card
      sx={{
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: "1rem",
        px: "1.5rem",
        width: "25%",
        textAlign: "center",
        gap: 1,
        borderRadius: "0.5rem",
        "&:hover": { border: "1px solid var(--primary)" },
      }}
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--bgIcon)",
          height: "4rem",
          width: "4rem",
          borderRadius: "50%",
          color: "var(--secondary)",
        }}
      >
        {Icon}
      </Box>
      <Typography
        sx={{ color: "var(--primary)", fontWeight: "700" }}
        variant="h6"
      >
        {title}
      </Typography>
      <Typography variant="body2">{Text}</Typography>
    </Card>
  );
}

export default CardSection;
