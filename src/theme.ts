import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#00ff99" }, // neon green para textos, bordes y elementos principales
    secondary: { main: "#ffcc66" }, // ámbar suave para highlights, botones y hover
    background: {
      default: "#0b0b0b", // fondo terminal oscuro
      paper: "#1a1a1a", // fondo ligeramente más claro para cards
    },
    text: {
      primary: "#00ff99", // neon green principal
      secondary: "#ffcc66", // ámbar para textos secundarios o resaltados
    },
  },
  typography: {
    fontFamily: "'VT323', monospace", // fuente Fallout / terminal
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "'VT323', monospace",
          textTransform: "none",
          "&:hover": {
            boxShadow: "0 0 15px #00ff99",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "2px solid #00ff99",
          boxShadow: "0 0 25px #00ff99, inset 0 0 15px #00ff99",
        },
      },
    },
  },
});

export default theme;
