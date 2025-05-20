import { Box, Card, Typography } from "@mui/material";
import { ReactNode } from "react";

interface CardContainerProps {
  icon: ReactNode;
  text: String;
  name: String;
  position: String;
}

// function TestimonialCard() {
//     return (
//         <Box component="div">
//             <CardContainer icon={<FormatQuoteIcon/>}/>
//         </Box>
//      );
// }

function TestimonialCard({ icon, text, name, position }: CardContainerProps) {
  return (
    <Card
      sx={{
        backgroundColor: "#ff",
        width: "30%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "left",
        border: "0.5rem",
        padding: "1rem",
        mt: 5,
        borderRadius: "0.5rem",
      }}
    >
      <Box
        component="div"
        sx={{
          color: "var(--secondary)",
          display: "flex",
          flexDirection: "column",
          gap: "0.7rem",
          padding: "1rem",
        }}
      >
        {icon}
        <Typography
          variant="body2"
          sx={{ fontSize: "1rem", color: "var(--text-dark)" }}
        >
          {text}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: "1rem", color: "var(--primary)", fontWeight: "700" }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: "1rem", color: "var(--text-light)" }}
        >
          {position}
        </Typography>
      </Box>
    </Card>
  );
}

export default TestimonialCard;
