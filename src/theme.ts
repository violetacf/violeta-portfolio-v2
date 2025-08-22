import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#00ff99" }, // neon green text / borders
    secondary: { main: "#ffcc00" }, // amber highlights
    background: {
      default: "#0b0b0b", // dark terminal background
      paper: "#1a1a1a", // slightly lighter for cards
    },
    text: {
      primary: "#00ff99", // neon green for main text
      secondary: "#ccccaa", // amber / yellow for secondary
    },
  },
  typography: {
    fontFamily: "'VT323', monospace", // Fallout-style monospace font
  },
});

export default theme;
