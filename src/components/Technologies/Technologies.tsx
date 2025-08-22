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
      bgcolor={theme.palette.background.default}
      padding={{ xs: 2, sm: 3, md: 4 }}
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
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.15)",
                boxShadow: `0 0 25pt ${theme.palette.primary.main}`,
              },
            }}
          >
            <Component
              size={40}
              color={theme.palette.primary.main}
              style={{
                filter: `drop-shadow(0 0 1pt ${theme.palette.primary.main}) 
                         drop-shadow(0 0 15px ${theme.palette.primary.main})`,
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
}
