import { useEffect, useRef, useState } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { technologies } from "../../data/technologies";
import { IconType, IconBaseProps } from "react-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Technologies() {
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Media queries for responsive icon sizes
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    if (containerRef.current) {
      const icons = containerRef.current.querySelectorAll(".tech-icon");

      gsap.fromTo(
        icons,
        { opacity: 0, scale: 0.5, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  // Determine icon size based on screen size
  const getIconSize = () => {
    if (isXs) return 30;
    if (isSm) return 35;
    if (isMdUp) return 40;
    return 40;
  };

  return (
    <Box
      ref={containerRef}
      display="flex"
      flexWrap="wrap"
      gap={{ xs: 2, sm: 3, md: 4 }}
      justifyContent="center"
      padding={{ xs: 2, sm: 3, md: 4 }}
      onMouseMove={handleMouseMove}
      sx={{
        fontFamily: theme.typography.fontFamily,
      }}
    >
      {technologies.map((tech) => {
        const IconComponent = tech.icon as IconType | undefined;
        if (!IconComponent) return null;

        const Component = IconComponent as React.ComponentType<IconBaseProps>;
        const isHovered = hoveredTech === tech.name;

        return (
          <Box
            key={tech.name}
            className="tech-icon"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width={{ xs: 50, sm: 70, md: 100 }}
            height={{ xs: 50, sm: 70, md: 100 }}
            sx={{
              cursor: "pointer",
              transform: isHovered ? "scale(1.15)" : "scale(1)",
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            <Component
              size={getIconSize()}
              style={{
                color: isHovered
                  ? theme.palette.secondary.main
                  : theme.palette.primary.main,
                filter: `drop-shadow(0 0 1pt ${
                  isHovered
                    ? theme.palette.secondary.main
                    : theme.palette.primary.main
                }) drop-shadow(0 0 15px ${
                  isHovered
                    ? theme.palette.secondary.main
                    : theme.palette.primary.main
                })`,
                animation: isHovered
                  ? "none"
                  : "flicker 1.5s infinite alternate",
                transition: "all 0.3s ease-in-out",
              }}
            />
          </Box>
        );
      })}

      {hoveredTech && (
        <Box
          sx={{
            position: "fixed",
            top: mousePos.y - 50,
            left: mousePos.x + 20,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.background.default,
            fontFamily: theme.typography.fontFamily,
            fontSize: { xs: "0.7rem", sm: "0.8rem", md: "1rem" },
            padding: "4px 10px",
            borderRadius: 3,
            boxShadow: `0 0 12px ${theme.palette.primary.main}`,
            whiteSpace: "nowrap",
            zIndex: 2,
            animation: "fadeUp 0.3s ease-out",
            transform: "translateX(-50%)",
            pointerEvents: "none",
          }}
        >
          {hoveredTech}
        </Box>
      )}

      <style>
        {`
          @keyframes flicker {
            0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
            20%, 22%, 24%, 55% { opacity: 0.75; }
          }

          @keyframes fadeUp {
            0% { opacity: 0; transform: translate(-50%, 20px); }
            100% { opacity: 1; transform: translate(-50%, 0); }
          }
        `}
      </style>
    </Box>
  );
}
