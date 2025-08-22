import { Box, Typography, Link, useTheme } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Contact() {
  const theme = useTheme();

  return (
    <Box
      id="contact"
      sx={{
        minHeight: "50vh",
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

      <Box
        sx={{
          display: "flex",
          gap: { xs: 6, md: 10 },
          zIndex: 1,
        }}
      >
        <Link
          href="https://www.linkedin.com/in/YOUR_LINKEDIN"
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
          href="https://github.com/YOUR_GITHUB"
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
          a, h3 { animation: flicker 1.5s infinite alternate; }
        `}
      </style>
    </Box>
  );
}
