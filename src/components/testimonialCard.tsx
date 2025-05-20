import { Box, Card } from "@mui/material";
import { ReactNode } from "react";

interface CardContainerProps {
  icon: ReactNode;
}

// function TestimonialCard() {
//     return (
//         <Box component="div">
//             <CardContainer icon={<FormatQuoteIcon/>}/>
//         </Box>
//      );
// }

function TestimonialCard({ icon }: CardContainerProps) {
  return (
    <Card
      sx={{
        backgroundColor: "#ff",
        width: "30%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "0.5rem",
        textAlign: "center",
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
        {icon}
      </Box>
    </Card>
  );
}

export default TestimonialCard;
