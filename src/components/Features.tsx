import { Box } from "@mui/material";
import CardTextSection from "./card";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import BarChartIcon from "@mui/icons-material/BarChart";
import EventIcon from "@mui/icons-material/Event";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CardSection from "./cardSection";

function FeaturesSection() {
  return (
    <Box
      component="div"
      sx={{
        backgroundColor: "var(--bgAccent)",
        minHeight: "35rem",
        display: "flex",
        flexDirection: "column",
        padding: { xs: 2, md: "none" },
      }}
    >
      <CardTextSection
        heading="What ChickHub Offers"
        subHeading="Comprehensive tools designed specifically for poultry farmers to improve"
        subHeading2="productivity and profitability."
      />
      <Box
        component="div"
        display="flex"
        gap="2rem"
        mt="3rem"
        sx={{
          flexDirection: {
            xs: "column",
            md: "row",
            alignItems: { xs: "center", md: "justify" },
          },
        }}
      >
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

export default FeaturesSection;
