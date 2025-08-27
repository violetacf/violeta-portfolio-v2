import { useEffect, useRef } from "react";
import { Box, useTheme } from "@mui/material";
import { technologies } from "../../data/technologies";
import { IconType, IconBaseProps } from "react-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Technologies() {
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

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
            // 👆 ensures it reverses on scroll up
          },
        }
      );
    }
  }, []);

  return (
    <Box
      ref={containerRef}
      display="flex"
      flexWrap="wrap"
      gap={{ xs: 2, sm: 3, md: 4 }}
      justifyContent="center"
      padding={{ xs: 2, sm: 3, md: 4 }}
      sx={{
        fontFamily: theme.typography.fontFamily,
        "& svg": {
          color: theme.palette.primary.main,
          transition: "all 0.3s ease-in-out",
          filter: `drop-shadow(0 0 1pt ${theme.palette.primary.main}) drop-shadow(0 0 15px ${theme.palette.primary.main})`,
          animation: "flicker 1.5s infinite alternate",
        },
        "&:hover svg": {
          transform: "scale(1.15)",
          filter: `drop-shadow(0 0 1pt ${theme.palette.primary.main}) drop-shadow(0 0 25px ${theme.palette.primary.main})`,
          color: theme.palette.secondary.main,
        },
      }}
    >
      {technologies.map((tech) => {
        const IconComponent = tech.icon as IconType | undefined;
        if (!IconComponent) return null;

        const Component = IconComponent as React.ComponentType<IconBaseProps>;

        return (
          <Box
            key={tech.name}
            className="tech-icon"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width={{ xs: 70, sm: 90, md: 100 }}
            height={{ xs: 70, sm: 90, md: 100 }}
            sx={{
              cursor: "pointer",
              "&:hover": { transform: "scale(1.15)" },
            }}
          >
            <Component size={40} />
          </Box>
        );
      })}
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
