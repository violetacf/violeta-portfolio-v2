import { projects } from "../../data/projects";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  useTheme,
} from "@mui/material";

export default function Projects() {
  const theme = useTheme();

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
        backgroundColor: "#0b0b0b",
        fontFamily: "'VT323', monospace",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Scanline overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "repeating-linear-gradient(to bottom, rgba(0,255,153,0.05) 0, rgba(0,255,153,0.05) 1px, transparent 1px, transparent 3px)",
          pointerEvents: "none",
        }}
      />

      {/* Heading */}
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          color: "#00ff99",
          textAlign: "center",
          textShadow: "0 0 10px #00ff99",
          letterSpacing: 2,
          mb: { xs: 2, md: 4 },
        }}
      >
        Projects
      </Typography>

      {/* Cards grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
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
            sx={{
              backgroundColor: "#111",
              border: "2px solid #00ff99",
              borderRadius: 3,
              boxShadow: "0 0 25px #00ff00, inset 0 0 15px #00ff00",
              fontFamily: "'VT323', monospace",
              color: "#00ff00",
              overflow: "hidden",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: "0 0 40px #00ff99, inset 0 0 20px #00ff99",
              },
            }}
          >
            <CardMedia
              component="img"
              height="180"
              image={require(`../../assets/${project.image}`)}
              alt={project.title}
              sx={{
                borderBottom: "2px solid #00ff99",
              }}
            />
            <CardContent
              sx={{
                color: "#00ff00",
                textAlign: "left",
                fontSize: { xs: "0.85rem", sm: "1rem" },
                lineHeight: 1.5,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#00ff99",
                  mb: 1,
                  textShadow: "0 0 8px #00ff99",
                  fontSize: { xs: "1.1rem", sm: "1.25rem" },
                }}
              >
                {project.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mb: 2,
                  color: "#00ffcc",
                  fontSize: "0.95rem",
                }}
              >
                {project.description}
              </Typography>
              {project.link && (
                <Button
                  size="small"
                  variant="outlined"
                  href={project.link}
                  target="_blank"
                  sx={{
                    fontFamily: "'VT323', monospace",
                    color: "#00ff99",
                    borderColor: "#00ff99",
                    textShadow: "0 0 5px #00ff99",
                    "&:hover": {
                      borderColor: "#00ffcc",
                      backgroundColor: "rgba(0,255,153,0.1)",
                      boxShadow: "0 0 15px #00ff99",
                    },
                  }}
                >
                  View
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>

      <style>
        {`
          @keyframes flicker {
            0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
            20%, 22%, 24%, 55% { opacity: 0.7; }
          }
        `}
      </style>
    </Box>
  );
}
