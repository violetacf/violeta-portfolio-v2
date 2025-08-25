import { Box, useTheme } from "@mui/material";
import { technologies } from "../../data/technologies";
import { IconType, IconBaseProps } from "react-icons";

export default function Technologies() {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      gap={{ xs: 2, sm: 3, md: 4 }}
      justifyContent="center"
      padding={{ xs: 2, sm: 3, md: 4 }}
      sx={{
        "& svg": {
          color: "#00ff99",
          transition: "all 0.3s ease-in-out",
          filter: "drop-shadow(0 0 1pt #00ff99) drop-shadow(0 0 15px #00ff99)",
          animation: "flicker 1.5s infinite alternate",
        },
        "&:hover svg": {
          transform: "scale(1.15)",
          filter: "drop-shadow(0 0 1pt #00ff99) drop-shadow(0 0 25px #00ff99)",
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
