import { useState, useEffect, MouseEvent } from "react";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Menu,
  MenuItem,
  Box,
  useTheme,
  LinearProgress,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import falloutGif from "../../assets/falloutHello.gif";

export default function NavBar() {
  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorNav(null);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const appBarHeight = window.innerWidth < 600 ? 56 : 64;
      const y = el.getBoundingClientRect().top + window.scrollY - appBarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    closeMenu();
  };

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: theme.palette.primary.main }}
    >
      <Toolbar sx={{ justifyContent: "space-between", position: "relative" }}>
        {/* Desktop menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Button
            sx={{ color: theme.palette.secondary.contrastText }}
            onClick={() => scrollToSection("about")}
          >
            About me
          </Button>
          <Button
            sx={{ color: theme.palette.secondary.contrastText }}
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </Button>
          <Button
            sx={{ color: theme.palette.secondary.contrastText }}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </Button>
        </Box>

        {/* Mobile menu */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            sx={{ color: theme.palette.secondary.contrastText }}
            onClick={openMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            open={Boolean(anchorNav)}
            anchorEl={anchorNav}
            onClose={closeMenu}
          >
            <MenuItem onClick={() => scrollToSection("about")}>About</MenuItem>
            <MenuItem onClick={() => scrollToSection("projects")}>
              Projects
            </MenuItem>
            <MenuItem onClick={() => scrollToSection("contact")}>
              Contact
            </MenuItem>
          </Menu>
        </Box>

        {/* Fallout icon */}
        <Box
          component="img"
          src={falloutGif}
          alt="Fallout character"
          sx={{
            position: "absolute",
            right: 10,
            width: 50,
            height: 50,
          }}
        />
      </Toolbar>

      {/* Scroll progress bar */}
      <LinearProgress
        variant="determinate"
        value={scrollProgress}
        sx={{
          height: 6,
          borderRadius: 3,
          backgroundColor: theme.palette.background.paper,
          "& .MuiLinearProgress-bar": {
            background: `linear-gradient(90deg, ${theme.palette.secondary.light}, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
            borderRadius: 3,
            boxShadow: `0 0 10px ${theme.palette.secondary.main}, 0 0 20px ${theme.palette.secondary.main}`,
            transition: "all 0.2s ease-in-out",
          },
        }}
      />
    </AppBar>
  );
}
