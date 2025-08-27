import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  useTheme,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import OKgif from "../../assets/falloutOK.gif";
import JumpingGif from "../../components/JumpingGif/JumpingGif";
import AnimatedTitle from "../../components/AnimatedTitle/AnimatedTitle";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export default function Contact() {
  const theme = useTheme();
  const serviceID = process.env.REACT_APP_SERVICE_ID!;
  const templateID = process.env.REACT_APP_TEMPLATE_ID!;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY!;

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceID, templateID, e.currentTarget, publicKey)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
          imageUrl: OKgif,
          imageWidth: 100,
          imageHeight: 100,
          imageAlt: "Success",
          confirmButtonText: "OK",
          customClass: {
            popup: "fallout-popup",
            title: "fallout-title",
            confirmButton: "fallout-button",
          },
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: "Please try again.",
          confirmButtonText: "OK",
          customClass: {
            popup: "fallout-popup",
            title: "fallout-title",
            confirmButton: "fallout-button",
          },
        });
      })
      .finally(() => {
        e.currentTarget.reset();
      });
  };

  return (
    <Box
      id="contact"
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, sm: 4 },
        py: { xs: 6, md: 10 },
        gap: { xs: 4, md: 6 },
        backgroundColor: theme.palette.background.default,
        fontFamily: theme.typography.fontFamily,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <JumpingGif message="Hello world!" />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: `repeating-linear-gradient(to bottom, ${theme.palette.primary.main}0D 0, ${theme.palette.primary.main}0D 1px, transparent 1px, transparent 3px)`,
          pointerEvents: "none",
        }}
      />

      <AnimatedTitle text="Contact" />

      <Typography
        sx={{
          color: theme.palette.primary.main,
          maxWidth: "600px",
          textAlign: "center",
          mb: 3,
        }}
      >
        Please fill out the form below. Fields with * are required. I will get
        back to you as soon as possible.
      </Typography>

      <Box
        component="form"
        onSubmit={handleOnSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          width: "100%",
          maxWidth: "600px",
          zIndex: 1,
        }}
      >
        {["user_email", "user_name", "user_message"].map((field) => (
          <TextField
            key={field}
            label={
              field === "user_email"
                ? "Email"
                : field === "user_name"
                ? "Name"
                : "Message"
            }
            name={field}
            required
            multiline={field === "user_message"}
            rows={field === "user_message" ? 4 : undefined}
            variant="outlined"
            InputLabelProps={{ style: { color: theme.palette.primary.main } }}
            InputProps={{ style: { color: theme.palette.primary.main } }}
          />
        ))}

        <Button
          type="submit"
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.background.default,
            fontFamily: theme.typography.fontFamily,
            fontSize: "1.2rem",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: theme.palette.primary.main + "CC",
            },
          }}
        >
          Submit
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: { xs: 6, md: 10 },
          mt: 4,
          zIndex: 1,
        }}
      >
        {[
          {
            href: "https://www.linkedin.com/in/violeta-cf/",
            Icon: LinkedInIcon,
            label: "LinkedIn",
          },
          {
            href: "https://github.com/violetacf",
            Icon: GitHubIcon,
            label: "GitHub",
          },
        ].map(({ href, Icon, label }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: theme.palette.primary.main,
              textDecoration: "none",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.2)",
                color: theme.palette.secondary.main,
                textShadow: `0 0 25px ${theme.palette.secondary.main}`,
                filter: `drop-shadow(0 0 1pt ${theme.palette.primary.main}) drop-shadow(0 0 25px ${theme.palette.primary.main})`,
              },
            }}
            aria-label={`Go to my ${label} profile`}
          >
            <Icon sx={{ fontSize: { xs: 50, sm: 60, md: 70 } }} />
            <Typography sx={{ mt: 1, fontSize: { xs: "1rem", sm: "1.1rem" } }}>
              {label}
            </Typography>
          </Link>
        ))}
      </Box>

      <style>
        {`
          @keyframes flicker {
            0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
            20%, 22%, 24%, 55% { opacity: 0.75; }
          }
        `}
      </style>
    </Box>
  );
}
