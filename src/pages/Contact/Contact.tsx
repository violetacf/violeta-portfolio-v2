import { Box, Typography, TextField, Button, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import JumpingGif from "../../components/JumpingGif/JumpingGif";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export default function Contact() {
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
        backgroundColor: "#0b0b0b",
        fontFamily: "'VT323', monospace",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <JumpingGif message="Contact me here!" />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "repeating-linear-gradient(to bottom, rgba(0,255,153,0.05) 0, rgba(0,255,153,0.05) 1px, transparent 1px, transparent 3px)",
          pointerEvents: "none",
        }}
      />

      <Typography
        variant="h3"
        gutterBottom
        sx={{
          color: "#00ff99",
          textAlign: "center",
          textShadow: "0 0 12px #00ff99",
          letterSpacing: 2,
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
        }}
      >
        Contact
      </Typography>

      <Typography
        sx={{
          color: "#00ff99",
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
        <TextField
          label="Email"
          name="user_email"
          type="email"
          required
          variant="outlined"
          InputLabelProps={{ style: { color: "#00ff99" } }}
          InputProps={{
            style: { color: "#00ff99", borderColor: "#00ff99" },
          }}
        />
        <TextField
          label="Name"
          name="user_name"
          required
          variant="outlined"
          InputLabelProps={{ style: { color: "#00ff99" } }}
          InputProps={{
            style: { color: "#00ff99" },
          }}
        />
        <TextField
          label="Message"
          name="user_message"
          required
          multiline
          rows={4}
          variant="outlined"
          InputLabelProps={{ style: { color: "#00ff99" } }}
          InputProps={{
            style: { color: "#00ff99" },
          }}
        />

        <Button
          type="submit"
          sx={{
            backgroundColor: "#00ff99",
            color: "#0b0b0b",
            fontFamily: "'VT323', monospace",
            fontSize: "1.2rem",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#00cc77",
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
        <Link
          href="https://www.linkedin.com/in/violeta-cf/"
          target="_blank"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#00ff99",
            textDecoration: "none",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.2)",
              textShadow: "0 0 25px #00ff99",
            },
          }}
        >
          <LinkedInIcon sx={{ fontSize: { xs: 50, sm: 60, md: 70 } }} />
          <Typography sx={{ mt: 1, fontSize: { xs: "1rem", sm: "1.1rem" } }}>
            LinkedIn
          </Typography>
        </Link>

        <Link
          href="https://github.com/violetacf"
          target="_blank"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#00ff99",
            textDecoration: "none",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.2)",
              textShadow: "0 0 25px #00ff99",
            },
          }}
        >
          <GitHubIcon sx={{ fontSize: { xs: 50, sm: 60, md: 70 } }} />
          <Typography sx={{ mt: 1, fontSize: { xs: "1rem", sm: "1.1rem" } }}>
            GitHub
          </Typography>
        </Link>
      </Box>

      <style>
        {`
          @keyframes flicker {
            0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
            20%, 22%, 24%, 55% { opacity: 0.75; }
          }

          /* General flicker for most elements */
          h3, label, input, textarea, a, svg { 
            animation: flicker 1.5s infinite alternate; 
          }

          /* Buttons outside popups get flicker */
          button:not(.swal2-confirm) {
            animation: flicker 1.5s infinite alternate; 
          }

          /* Popup styling */
          .fallout-popup {
            background-color: #0b0b0b !important;
            border: 2px solid #00ff99;
            font-family: 'VT323', monospace;
            text-shadow: 0 0 12px #00ff99;
          }

          .fallout-title {
            color: #00ff99 !important;
            letter-spacing: 2px;
            font-size: 1.8rem;
            text-shadow: 0 0 12px #00ff99;
          }

          .fallout-button {
            background-color: #00ff99 !important;
            color: #0b0b0b !important;
            font-family: 'VT323', monospace;
            font-size: 1.2rem;
            font-weight: bold;
            border-radius: 8px;
            text-transform: uppercase;
            transition: all 0.3s ease-in-out;
            pointer-events: auto !important; /* ensures button is clickable */
            animation: none !important; /* disables flicker */
          }

          .fallout-button:hover {
            background-color: #00cc77 !important;
            transform: scale(1.05);
            text-shadow: 0 0 20px #00ff99;
          }
        `}
      </style>
    </Box>
  );
}
