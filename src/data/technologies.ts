import { IconType } from "react-icons";
import {
  SiReact,
  SiVuedotjs,
  SiJavascript,
  SiTypescript,
  SiFlutter,
  SiHtml5,
  SiCss3,
  SiGit,
  SiCypress,
} from "react-icons/si";

export const technologies: { name: string; icon: IconType }[] = [
  { name: "React", icon: SiReact },
  { name: "Vue 2/3", icon: SiVuedotjs },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Flutter/Dart", icon: SiFlutter },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3/SCSS", icon: SiCss3 },
  { name: "Git", icon: SiGit },
  { name: "Cypress", icon: SiCypress },
];
