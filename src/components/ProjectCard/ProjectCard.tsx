import { useEffect, useRef } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  IconButton,
  Box,
  useTheme,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import defaultImage from "../../assets/project.jpg";

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
  project: typeof import("../../data/projects").projects[0];
  index: number;
  onMobilePreview: (link: string) => void;
}

export default function ProjectCard({
  project,
  index,
  onMobilePreview,
}: ProjectCardProps) {
  const theme = useTheme();
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    const fromX = index % 2 === 0 ? -200 : 200;

    gsap.fromTo(
      cardRef.current,
      { x: fromX, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, [index]);

  return (
    <Card
      ref={cardRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
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
        alt={`${project.title} screenshot`}
        loading="lazy"
        sx={{
          borderBottom: `2px solid ${theme.palette.primary.main}`,
          objectFit: "contain",
          backgroundColor: theme.palette.background.default,
        }}
      />

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          flexGrow: 1,
          pb: 2,
        }}
      >
        <Box>
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
            sx={{ color: theme.palette.secondary.main, fontSize: "0.95rem" }}
          >
            {project.description}
          </Typography>
        </Box>

        <Box sx={{ mt: "auto" }}>
          <Box
            sx={{
              height: "2px",
              backgroundColor: theme.palette.primary.main,
              mb: 1,
            }}
          />
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {project.mobilePreview && project.link && (
              <Button
                size="small"
                variant="outlined"
                onClick={() => onMobilePreview(project.link)}
                sx={{
                  fontFamily: theme.typography.fontFamily,
                  color: theme.palette.primary.main,
                  borderColor: theme.palette.primary.main,
                  "&:hover": {
                    transform: "scale(1.05)",
                    borderColor: theme.palette.secondary.main,
                    backgroundColor: `${theme.palette.primary.main}1A`,
                  },
                }}
              >
                Mobile Preview
              </Button>
            )}

            {project.browserPreview && project.link && (
              <Button
                size="small"
                variant="outlined"
                href={project.link}
                target="_blank"
                sx={{
                  fontFamily: theme.typography.fontFamily,
                  color: theme.palette.primary.main,
                  borderColor: theme.palette.primary.main,
                  "&:hover": {
                    transform: "scale(1.05)",
                    borderColor: theme.palette.secondary.main,
                    backgroundColor: `${theme.palette.primary.main}1A`,
                  },
                }}
              >
                Web Preview
              </Button>
            )}

            {project.github && (
              <IconButton
                href={project.github}
                target="_blank"
                sx={{
                  color: theme.palette.primary.main,
                  "&:hover": {
                    color: theme.palette.secondary.main,
                    transform: "scale(1.1)",
                  },
                }}
              >
                <GitHubIcon sx={{ fontSize: 24 }} />
              </IconButton>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
