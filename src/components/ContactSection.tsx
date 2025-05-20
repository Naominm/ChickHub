import { Box, Typography } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { GitHub } from "@mui/icons-material";
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
        gap: "1.5rem",
      }}
    >
      <Typography
        variant="h6"
        sx={{ color: "var(--primary)", fontWeight: 800 }}
      >
        Let's Work Together!
      </Typography>
      <Typography
        variant="h6"
        sx={{ fontSize: "1rem", color: "var(--text-light)" }}
      >
        Have questions about ChickHub or interested in Naomi's web development
        services? Get in touch and I'll get back to you as soon as possible.
      </Typography>
      <Box
        component="div"
        sx={{ display: "flex", alignItems: "center", gap: "1.5rem" }}
      >
        <Typography>
          <MailOutlineIcon
            sx={{
              backgroundColor: "var(--bgIcon)",
              borderRadius: "50%",
              height: "2rem",
              width: "2rem",
              padding: "0.2rem",
              color: "var(--primary)",
            }}
          />
        </Typography>
        <Typography variant="body2" sx={{ color: "var(--text-light)" }}>
          Email <br />{" "}
          <span
            style={{
              fontSize: "1rem",
              fontWeight: "500",
              color: "var(--text-dark)",
            }}
          >
            naomi@chickhub.com
          </span>
        </Typography>
      </Box>
      <Box
        component="div"
        sx={{ display: "flex", alignItems: "center", gap: "1.5rem" }}
      >
        <Typography>
          <PhoneIcon
            sx={{
              backgroundColor: "var(--bgIcon)",
              borderRadius: "50%",
              height: "2rem",
              width: "2rem",
              padding: "0.2rem",
              color: "var(--primary)",
            }}
          />
        </Typography>
        <Typography variant="body2" sx={{ color: "var(--text-light)" }}>
          Whatsapp
          <br />{" "}
          <span
            style={{
              fontSize: "1rem",
              fontWeight: "500",
              color: "var(--text-dark)",
            }}
          >
            +254703937319
          </span>
        </Typography>
      </Box>
      <Box
        component="div"
        sx={{ display: "flex", paddingLeft: "2rem", gap: "2rem" }}
      >
        <Typography
          variant="body2"
          sx={{
            backgroundColor: "var(--bgIcon)",
            width: "2rem",
            height: "2rem",
            padding: "0.2rem",
            borderRadius: "50%",
          }}
        >
          <LinkedInIcon sx={{ color: "var(--primary)" }} />
        </Typography>
        <Typography
          variant="body2"
          sx={{
            backgroundColor: "var(--bgIcon)",
            width: "2rem",
            height: "2rem",
            padding: "0.2rem",
            borderRadius: "50%",
          }}
        >
          <GitHub sx={{ color: "var(--primary)" }} />
        </Typography>
      </Box>
    </Box>
  );
}

function FormInformation() {
  return <Box component="div" sx={{ width: "50%" }}></Box>;
}

export default ContactSection;
