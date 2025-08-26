import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function NeonCursor() {
  const theme = useTheme();
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [showMessage, setShowMessage] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const idleTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current!;
    const follower = followerRef.current!;
    let mouseX = 0,
      mouseY = 0,
      posX = 0,
      posY = 0;

    const resetIdleTimer = () => {
      setShowMessage(false);
      if (idleTimeout.current) clearTimeout(idleTimeout.current);
      idleTimeout.current = setTimeout(() => {
        setShowMessage(true);
      }, 5000);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setMousePos({ x: mouseX, y: mouseY });
      cursor.style.top = `${mouseY}px`;
      cursor.style.left = `${mouseX}px`;
      resetIdleTimer();
    };

    const animate = () => {
      posX += (mouseX - posX) * 0.15;
      posY += (mouseY - posY) * 0.15;
      follower.style.top = `${posY}px`;
      follower.style.left = `${posX}px`;
      requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("mousemove", onMouseMove);
    resetIdleTimer();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (idleTimeout.current) clearTimeout(idleTimeout.current);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 12,
          height: 12,
          borderRadius: "50%",
          backgroundColor: theme.palette.primary.main,
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
          boxShadow: `0 0 8px ${theme.palette.primary.main}, 
                      0 0 15px ${theme.palette.primary.main}`,
        }}
      />

      <div
        ref={followerRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 30,
          height: 30,
          borderRadius: "50%",
          backgroundColor: "transparent",
          border: `2px solid ${theme.palette.primary.main}`,
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          zIndex: 9998,
          boxShadow: `0 0 12px ${theme.palette.secondary.main}, 
                      0 0 25px ${theme.palette.secondary.main}`,
        }}
      />

      {showMessage && (
        <Box
          sx={{
            position: "fixed",
            top: mousePos.y - 50,
            left: mousePos.x + 20,
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
          Are you still there?
        </Box>
      )}

      <style>
        {`
          @keyframes fadeUp {
            0% { opacity: 0; transform: translate(-50%, 20px); }
            100% { opacity: 1; transform: translate(-50%, 0); }
          }
        `}
      </style>
    </>
  );
}
