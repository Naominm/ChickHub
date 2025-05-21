import { Box, Typography, Button, TextField, Paper } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
function ContactSection() {
  return (
    <Box
      component="div"
      id="contact"
      sx={{
        minHeight: "30rem",
        paddingTop: 10,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: "2rem",
        px: 5,
        mb: 10,
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
        width: { xs: "100%", md: "50%" },
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
          component="a"
          href="https://www.linkedin.com/in/mbugua-naomi"
          target="_blank"
          sx={{
            backgroundColor: "var(--bgIcon)",
            width: "2rem",
            height: "2rem",
            padding: "0.2rem",
            borderRadius: "50%",
            "&:hover": { backgroundColor: "var(--primary)", color: "#fff" },
          }}
        >
          <LinkedInIcon
            sx={{ color: "var(--primary)", "&:hover": { color: "#fff" } }}
          />
        </Typography>
        <Typography
          variant="body2"
          component="a"
          href="https://github.com/Naominm"
          target="_blank"
          sx={{
            backgroundColor: "var(--bgIcon)",
            width: "2rem",
            height: "2rem",
            padding: "0.2rem",
            borderRadius: "50%",
            "&:hover": { backgroundColor: "var(--primary)", color: "#fff" },
          }}
        >
          <GitHubIcon
            sx={{ color: "var(--primary)", "&:hover": { color: "#fff" } }}
          />
        </Typography>
      </Box>
    </Box>
  );
}

function FormInformation() {
  return (
    <Paper
      component="form"
      sx={{
        pt: "3rem",
        width: { xs: "100%", md: "50%" },
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        px: "1.5rem",
      }}
    >
      <TextField label="Name" variant="outlined">
        Name
      </TextField>
      <TextField label="Email" variant="outlined">
        Email
      </TextField>
      <TextField label="Message" variant="outlined" multiline>
        Message
      </TextField>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "var(--primary)",
          mb: { xs: 2, mb: 0 },
          "&:hover": { backgroundColor: "var(--hover)" },
        }}
      >
        Send a Message
      </Button>
    </Paper>
  );
}

export default ContactSection;
