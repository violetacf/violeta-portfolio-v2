import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedTitle from "../../components/AnimatedTitle/AnimatedTitle";
import { projects } from "../../data/projects";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  useTheme,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import defaultImage from "../../assets/project.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const theme = useTheme();
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const fromX = index % 2 === 0 ? -200 : 200;

      gsap.fromTo(
        card,
        { x: fromX, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%", // hasta que salga de la sección
            toggleActions: "play reverse play reverse", // entra y sale según scroll
          },
          delay: index * 0.1,
        }
      );
    });
  }, []);

  return (
    <Box
      id="projects"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, sm: 4 },
        py: 6,
        gap: { xs: 3, md: 6 },
        backgroundColor: theme.palette.background.default,
        fontFamily: theme.typography.fontFamily,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: `repeating-linear-gradient(to bottom, ${theme.palette.primary.main}0D 0, ${theme.palette.primary.main}0D 1px, transparent 1px, transparent 3px)`,
          pointerEvents: "none",
        }}
      />

      <AnimatedTitle text="Projects" />

      <Box
        sx={{
          display: "grid",
          justifyContent: "center",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(auto-fit, minmax(300px, 1fr))",
          },
          gap: 4,
          zIndex: 1,
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            sx={{
              backgroundColor: theme.palette.background.paper,
              border: `2px solid ${theme.palette.primary.main}`,
              borderRadius: 3,
              boxShadow: `0 0 25px ${theme.palette.primary.main}33, inset 0 0 15px ${theme.palette.primary.main}33`,
              fontFamily: theme.typography.fontFamily,
              color: theme.palette.text.primary,
              overflow: "hidden",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: `0 0 40px ${theme.palette.primary.main}, inset 0 0 20px ${theme.palette.primary.main}`,
              },
            }}
          >
            <CardMedia
              component="img"
              height="180"
              image={project.image || defaultImage}
              alt={project.title}
              sx={{ borderBottom: `2px solid ${theme.palette.primary.main}` }}
            />

            <CardContent
              sx={{
                color: theme.palette.text.secondary,
                textAlign: "left",
                fontSize: { xs: "0.85rem", sm: "1rem" },
                lineHeight: 1.5,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.primary.main,
                  mb: 1,
                  textShadow: `0 0 8px ${theme.palette.primary.main}`,
                  fontSize: { xs: "1.1rem", sm: "1.25rem" },
                }}
              >
                {project.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mb: 2,
                  color: theme.palette.secondary.main,
                  fontSize: "0.95rem",
                }}
              >
                {project.description}
              </Typography>

              <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
                {project.link && (
                  <Button
                    size="small"
                    variant="outlined"
                    href={project.link}
                    target="_blank"
                    sx={{
                      fontFamily: theme.typography.fontFamily,
                      color: theme.palette.primary.main,
                      borderColor: theme.palette.primary.main,
                      textShadow: `0 0 5px ${theme.palette.primary.main}`,
                      "&:hover": {
                        borderColor: theme.palette.secondary.main,
                        backgroundColor: `${theme.palette.primary.main}1A`,
                        boxShadow: `0 0 15px ${theme.palette.primary.main}`,
                      },
                    }}
                  >
                    View Deployed
                  </Button>
                )}

                {project.github && (
                  <IconButton
                    href={project.github}
                    target="_blank"
                    sx={{
                      color: theme.palette.primary.main,
                      "&:hover": { color: theme.palette.secondary.main },
                    }}
                  >
                    <GitHubIcon sx={{ fontSize: 24 }} />
                  </IconButton>
                )}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
