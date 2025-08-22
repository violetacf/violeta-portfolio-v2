import { Box } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import jumpingGif from "../../assets/falloutJumping.gif";

interface JumpingGifProps {
  size?: { xs: number; sm?: number; md?: number };
  message?: string;
}

export default function JumpingGif({
  size = { xs: 60, sm: 80, md: 90 },
  message = "YAYYY! ⚡ Vault systems online!",
}: JumpingGifProps) {
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

      {jump && (
        <Box
          sx={{
            position: "absolute",
            bottom: 150,
            left: gifLeft,
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
        `}
      </style>
    </>
  );
}
