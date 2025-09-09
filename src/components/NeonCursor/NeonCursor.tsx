import { useEffect, useRef, useState } from "react";
import { Box, useTheme } from "@mui/material";

export default function NeonCursor() {
  const theme = useTheme();
  const [showMessage, setShowMessage] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const idleTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const startIdleTimer = () => {
      if (idleTimeout.current) clearTimeout(idleTimeout.current);
      idleTimeout.current = setTimeout(() => setShowMessage(true), 5000);
    };

    const onMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      startIdleTimer();
      if (showMessage) setShowMessage(false);
    };

    startIdleTimer();
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (idleTimeout.current) clearTimeout(idleTimeout.current);
    };
  }, [showMessage]);

  return (
    <>
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
