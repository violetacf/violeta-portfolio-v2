import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

// Pages and components:
import NavBar from "./components/NavBar/NavBar";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <ThemeProvider theme={theme}>
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
