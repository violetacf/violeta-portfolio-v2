import { Box, useTheme } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import jumpingGif from "../../assets/falloutJumping.gif";

interface JumpingGifProps {
  size?: { xs: number; sm?: number; md?: number };
  message?: string;
}

export default function JumpingGif({
  size = { xs: 60, sm: 80, md: 90 },
  message = "Hello World!",
}: JumpingGifProps) {
  const theme = useTheme();
  const [jump, setJump] = useState(false);
  const gifRef = useRef<HTMLDivElement>(null);
  const [gifLeft, setGifLeft] = useState(0);

  const handleJump = () => {
    setJump(true);
    setTimeout(() => setJump(false), 1500);
  };

  useEffect(() => {
    const updatePosition = () => {
      if (gifRef.current) {
        const left = gifRef.current.getBoundingClientRect().left;
        setGifLeft(left);
      }
      requestAnimationFrame(updatePosition);
    };
    requestAnimationFrame(updatePosition);
  }, []);

  return (
    <>
      {/* Ola animada */}
      <Box
        className="waveLine"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "30pt",
          background: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 10px,
            ${theme.palette.secondary.main} 10px,
            ${theme.palette.secondary.main} 11px
          )`,
          maskImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%25%22 height=%22100%25%22><path d=%22M0,20 Q25,0 50,20 T100,20 V40 H0 Z%22 fill=%22white%22/></svg>')",
          maskRepeat: "repeat-x",
          maskSize: "100px 40px",
          WebkitMaskImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%25%22 height=%22100%25%22><path d=%22M0,20 Q25,0 50,20 T100,20 V40 H0 Z%22 fill=%22white%22/></svg>')",
          WebkitMaskRepeat: "repeat-x",
          WebkitMaskSize: "100px 40px",
          boxShadow: `0 0 15px ${theme.palette.secondary.main}`,
          animation: "waveMove 8s linear infinite", // 👈 animación añadida
        }}
      />

      {/* GIF */}
      <Box
        component="img"
        src={jumpingGif}
        alt="Jumping gif"
        ref={gifRef}
        onClick={handleJump}
        sx={{
          position: "absolute",
          bottom: 10,
          width: size.xs,
          height: size.xs,
          cursor: "pointer",
          animation: jump
            ? "moveGif 20s linear infinite, jump 0.5s ease-out 1"
            : "moveGif 20s linear infinite",
        }}
      />

      {/* Mensaje al saltar */}
      {jump && (
        <Box
          sx={{
            position: "absolute",
            bottom: 150,
            left: gifLeft,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.background.default,
            fontFamily: theme.typography.fontFamily,
            fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
            padding: "6px 12px",
            borderRadius: 3,
            boxShadow: `0 0 12px ${theme.palette.primary.main}`,
            whiteSpace: "nowrap",
            zIndex: 2,
            animation: "fadeUp 1.2s ease-out",
            transform: "translateX(-50%)",
          }}
        >
          {message}
        </Box>
      )}

      <style>
        {`
          @keyframes moveGif {
            0% { left: 0; transform: scaleX(-1); }
            49% { left: calc(100% - 70px); transform: scaleX(-1); }
            50% { left: calc(100% - 70px); transform: scaleX(1); }
            99% { left: 0; transform: scaleX(1); }
            100% { left: 0; transform: scaleX(-1); }
          }

          @keyframes jump {
            0% { transform: translateY(0); }
            50% { transform: translateY(-100px); }
            100% { transform: translateY(0); }
          }

          @keyframes fadeUp {
            0% { opacity: 0; transform: translate(-50%, 20px); }
            100% { opacity: 1; transform: translate(-50%, 0); }
          }

          @keyframes waveMove {
            0% { mask-position: 0 0; -webkit-mask-position: 0 0; }
            100% { mask-position: 100px 0; -webkit-mask-position: 100px 0; }
          }
        `}
      </style>
    </>
  );
}
