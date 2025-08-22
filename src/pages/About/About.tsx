import { Box, Typography, Avatar, useTheme } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import myPicture from "../../assets/myPicture.jpg";
import falloutGif from "../../assets/falloutJumping.gif";
import Technologies from "../../components/Technologies/Technologies";
import JumpingGif from "../../components/JumpingGif/JumpingGif";

export default function About() {
  const theme = useTheme();
  const [jump, setJump] = useState(false);
  const dinoRef = useRef<HTMLDivElement>(null);
  const [dinoLeft, setDinoLeft] = useState(0);

  const handleJump = () => {
    setJump(true);
    setTimeout(() => setJump(false), 1500);
  };

  useEffect(() => {
    const updatePosition = () => {
      if (dinoRef.current) {
        const left = dinoRef.current.getBoundingClientRect().left;
        setDinoLeft(left);
      }
      requestAnimationFrame(updatePosition);
    };
    requestAnimationFrame(updatePosition);
  }, []);

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

      <Typography
        variant="h3"
        gutterBottom
        sx={{
          color: "#00ff99",
          textAlign: "center",
          textShadow: "0 0 12px #00ff99",
          letterSpacing: 2,
          mb: { xs: 3, md: 5 },
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
        }}
      >
        About me
      </Typography>

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
            whiteSpace: "pre-line",
            textAlign: "left",
            fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.15rem" },
            lineHeight: 1.6,
            animation: "flicker 1.5s infinite alternate",
          }}
        >
          {`[VAULT-TEC TERMINAL LOG: VIOLETA.EXE]  
> STATUS: ONLINE — SYSTEMS NOMINAL  
> CORE MODULES: ACCESSIBILITY | FRONTEND | BACKEND  
> PRIMARY DIRECTIVE: Construct inclusive digital landscapes for all survivors  
> CONTINUOUS UPDATE: Scanning & absorbing new technologies... COMPLETE [✓]  

--- PERSONAL SUBROUTINE FILES ---  
- Plant caretaker: photosynthesis monitoring [ACTIVE]  
- Animal companion protocols: loyalty secured [ACTIVE]  
- Physical training: pull-up sequence x3 executed successfully [NEW RECORD]  
- Café locator: Madrid sector (hidden stash points discovered)  
- Videogame immersion: simulation systems online  
- Thriller archives: novels decrypted nightly  
- Puzzle-solving routines: engaged & optimized`}
        </Box>
      </Box>

      <Technologies />

      <Box
        className="waveLine"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "30pt",
          background:
            "repeating-linear-gradient(90deg, transparent, transparent 10px, #00ff99 10px, #00ff99 11px)",
          maskImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%25%22 height=%22100%25%22><path d=%22M0,20 Q25,0 50,20 T100,20 V40 H0 Z%22 fill=%22white%22/></svg>')",
          maskRepeat: "repeat-x",
          maskSize: "100px 40px",
          WebkitMaskImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%25%22 height=%22100%25%22><path d=%22M0,20 Q25,0 50,20 T100,20 V40 H0 Z%22 fill=%22white%22/></svg>')",
          WebkitMaskRepeat: "repeat-x",
          WebkitMaskSize: "100px 40px",
          boxShadow: "0 0 15px #00ff99",
        }}
      />

      <Box
        component="img"
        src={falloutGif}
        alt="Fallout jumping rope"
        ref={dinoRef}
        onClick={handleJump}
        sx={{
          position: "absolute",
          bottom: 10,
          width: { xs: 60, sm: 80, md: 90 },
          height: { xs: 60, sm: 80, md: 90 },
          cursor: "pointer",
          animation: jump
            ? "moveDino 20s linear infinite, jump 0.5s ease-out 1"
            : "moveDino 20s linear infinite",
        }}
      />

      {jump && (
        <Box
          sx={{
            position: "absolute",
            bottom: 150, // higher jump
            left: dinoLeft,
            backgroundColor: "#00ff99",
            color: "#000",
            fontFamily: "'VT323', monospace",
            fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
            padding: "6px 12px",
            borderRadius: 3,
            boxShadow: "0 0 12px #00ff99",
            whiteSpace: "nowrap",
            zIndex: 2,
            animation: "fadeUp 1.2s ease-out",
            transform: "translateX(-50%)",
          }}
        >
          YAYYY! ⚡ Vault systems online!
        </Box>
      )}
      <JumpingGif message="Hello World!" />

      <style>
        {`
             @keyframes flicker {
                0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
                20%, 22%, 24%, 55% { opacity: 0.75; }
              }

              @keyframes moveDino {
               0% { left: 0; transform: scaleX(-1); }
                49% { left: calc(100% - 70px); transform: scaleX(-1); }
                50% { left: calc(100% - 70px); transform: scaleX(1); }
                99% { left: 0; transform: scaleX(1); }
                100% { left: 0; transform: scaleX(-1); }
              }

             @keyframes jump {
               0% { transform: translateY(0); }
               50% { transform: translateY(-50px); }
                  100% { transform: translateY(0); }
             }

             @keyframes fadeInOut {
                 0% { opacity: 0; transform: translateY(10px); }
                50% { opacity: 1; transform: translateY(0); }
                100% { opacity: 0; transform: translateY(-10px); }
             }
            `}
      </style>
    </Box>
  );
}
