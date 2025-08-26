import { Box, Typography, Avatar, useTheme } from "@mui/material";
import myPicture from "../../assets/myPicture.jpg";
import Technologies from "../../components/Technologies/Technologies";
import JumpingGif from "../../components/JumpingGif/JumpingGif";
import AnimatedTitle from "../../components/AnimatedTitle/AnimatedTitle";

export default function About() {
  const theme = useTheme();

  return (
    <Box
      id="about"
      sx={{
        minHeight: "85vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, sm: 4 },
        py: { xs: 6, md: 10 },
        gap: { xs: 4, md: 8 },
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

      <AnimatedTitle text="About me" />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 4, md: 6 },
          zIndex: 1,
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <Avatar
          alt="Violeta"
          src={myPicture}
          sx={{
            width: { xs: 160, sm: 200, md: 260, lg: 300 },
            height: { xs: 160, sm: 200, md: 260, lg: 300 },
            border: "3px solid #00ff99",
            boxShadow: "0 0 25px #00ff99",
            transition: "all 0.3s ease-in-out",
            flexShrink: 0,
            "&:hover": {
              boxShadow: "0 0 40px #00ff99",
              transform: "scale(1.05)",
            },
          }}
        />

        <Box
          sx={{
            position: "relative",
            flex: 1,
            maxWidth: 700,
            minHeight: { xs: "auto", md: 420 },
            p: { xs: 3, sm: 4, md: 5 },
            border: `2px solid ${theme.palette.primary.main}`,
            borderRadius: 3,
            backgroundColor: "#111",
            boxShadow: "0 0 25px #00ff00, inset 0 0 15px #00ff00",
            fontFamily: "'VT323', monospace",
            color: "#00ff00",
            textAlign: "left",
            fontSize: { xs: "0.7rem", sm: "0.85rem", md: "1rem" }, // regular text
            lineHeight: 1.6,
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            animation: "flicker 1.5s infinite alternate",
          }}
        >
          <Typography
            sx={{
              color: "#00ffcc",
              fontWeight: "bold",
              fontSize: { xs: "0.8rem", sm: "0.95rem", md: "1.1rem" }, // slightly bigger for headings
            }}
          >
            [VAULT-TEC TERMINAL LOG: VIOLETA.EXE]
          </Typography>

          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "0.75rem", sm: "0.9rem", md: "1.05rem" },
            }}
          >
            SYSTEM STATUS:
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "0.7rem", sm: "0.85rem", md: "1rem" } }}
          >
            ONLINE — ALL SYSTEMS NOMINAL
          </Typography>

          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "0.75rem", sm: "0.9rem", md: "1.05rem" },
            }}
          >
            CORE MODULES:
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            <Typography
              sx={{ fontSize: { xs: "0.68rem", sm: "0.83rem", md: "0.95rem" } }}
            >
              - ACCESSIBILITY
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "0.68rem", sm: "0.83rem", md: "0.95rem" } }}
            >
              - FRONTEND
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "0.68rem", sm: "0.83rem", md: "0.95rem" } }}
            >
              - BACKEND
            </Typography>
          </Box>

          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "0.75rem", sm: "0.9rem", md: "1.05rem" },
            }}
          >
            PRIMARY DIRECTIVE:
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "0.7rem", sm: "0.85rem", md: "1rem" } }}
          >
            Build inclusive digital landscapes for all survivors.
          </Typography>

          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "0.75rem", sm: "0.9rem", md: "1.05rem" },
            }}
          >
            PERSONAL SUBROUTINES:
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            {[
              "- Plant caretaker .......... [ACTIVE]",
              "- Animal companion protocols [ACTIVE]",
              "- Physical training: pull-ups x3 [NEW RECORD]",
              "- Café locator: Madrid sector [ONLINE]",
              "- Videogame immersion ........ [RUNNING]",
              "- Thriller archives .......... [DECRYPTING NIGHTLY]",
              "- Puzzle-solving routines .... [OPTIMIZED]",
            ].map((item, idx) => (
              <Typography
                key={idx}
                sx={{
                  fontSize: { xs: "0.68rem", sm: "0.83rem", md: "0.95rem" },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>

      <Technologies />
      <JumpingGif />

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
