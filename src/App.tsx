import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { useState, useEffect } from "react";

// Pages and components:
import NavBar from "./components/NavBar/NavBar";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import NeonCursor from "./components/NeonCursor/NeonCursor";

function App() {
  const [showCursor, setShowCursor] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const canHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    setShowCursor(canHover);

    const touchDetected =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(touchDetected);

    if (touchDetected) {
      const handleTouch = () => {
        if (navigator.vibrate) {
          navigator.vibrate(10);
        }
      };
      window.addEventListener("touchstart", handleTouch);

      return () => {
        window.removeEventListener("touchstart", handleTouch);
      };
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {showCursor && <NeonCursor />}
      <NavBar />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </ThemeProvider>
  );
}

export default App;
