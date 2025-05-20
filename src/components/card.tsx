import { Box, Typography, Card } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import BarChartIcon from "@mui/icons-material/BarChart";
import EventIcon from "@mui/icons-material/Event";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CardSection from "./cardSection";

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
        minHeight: "30rem",
        textAlign: "center",
        padding: "5rem",
      }}
    >
      <Box component="img"></Box>
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
      <Box component="div" display="flex" gap="2rem" mt="5rem">
        <CardSection
          title="Flock Management"
          Text="Keep track of your birds with our easy-to-use management system. Record health status, feeding schedules, and more"
          Icon={<BusinessCenterIcon />}
        />
        <CardSection
          title="Productivity Tracking"
          Text="Monitor egg production, growth rates, and other key metrics to optimize your farm's performance."
          Icon={<BarChartIcon />}
        />
        <CardSection
          title="Market Linkage"
          Text="Connect with buyers, suppliers, and other farmers. Access real-time market prices and demands."
          Icon={<EventIcon />}
        />
        <CardSection
          title="Financial Insights"
          Text="Track expenses, revenue, and profit margins. Generate reports to make data-driven decisions for your farm."
          Icon={<AttachMoneyIcon />}
        />
      </Box>
    </Box>
  );
}

export default CardTextSection;
