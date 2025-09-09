import lilybloom from "../assets/project-lilybloom.png";
import nearend from "../assets/project-nearend.png";
import monsterslayer from "../assets/project-monsterslayer.png";
import spaceEscapeRoom from "../assets/project-space-escape-room.png";

export const projects = [
  {
    title: "Is the End Near?",
    description:
      "A React web app that visualizes near-Earth objects in real time, showing their size, distance, and potential threat level.",
    image: nearend,
    link: "https://is-the-end-near.onrender.com/",
    github: "https://github.com/violetacf/near-earth",
    mobilePreview: true,
    browserPreview: true,
  },
  {
    title: "LilyBloom",
    description:
      "A React project for browsing and managing floral arrangements, with a minimalistic interface.",
    image: lilybloom,
    link: "https://lilybloom.onrender.com/",
    github: "https://github.com/violetacf/lilybloom-frontend",
    mobilePreview: true,
    browserPreview: true,
  },
  {
    title: "Flutter App",
    description:
      "A Flutter web app for showcase, running inside a mobile modal.",
    image: spaceEscapeRoom,
    link: "https://space-escape-room.onrender.com/",
    github: "https://github.com/violetacf/space_escape_room",
    mobilePreview: true,
    browserPreview: false, // mobile only
  },
  {
    title: "Monster Slayer",
    description:
      "A Vue project game where you battle monsters and control heroes with dynamic animations.",
    image: monsterslayer,
    link: "https://monster-slayer-1rdt.onrender.com/",
    github: "https://github.com/violetacf/monster-slayer",
    mobilePreview: false, // no mobile modal - add when responsive
    browserPreview: true,
  },
];
