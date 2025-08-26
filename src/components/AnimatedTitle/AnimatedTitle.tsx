import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "@mui/material/styles";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTitleProps {
  text: string;
}

export default function AnimatedTitle({ text }: AnimatedTitleProps) {
  const theme = useTheme();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [fontSize, setFontSize] = useState("3rem");

  useEffect(() => {
    const updateFontSize = () => {
      const w = window.innerWidth;
      if (w < 600) setFontSize("2rem");
      else if (w < 900) setFontSize("2.5rem");
      else setFontSize("3rem");
    };
    updateFontSize();
    window.addEventListener("resize", updateFontSize);
    return () => window.removeEventListener("resize", updateFontSize);
  }, []);

  useEffect(() => {
    if (!titleRef.current) return;

    const cursor = "|";

    const animateText = () => {
      if (!titleRef.current) return;

      titleRef.current.innerHTML = "";
      let displayed = "";

      const tl = gsap.timeline();

      text.split("").forEach((letter, i) => {
        tl.to(
          {},
          {
            duration: 0.05,
            onComplete: () => {
              displayed += letter;
              titleRef.current!.innerHTML =
                displayed +
                `<span style="display:inline-block;opacity:1;color:${theme.palette.secondary.main};">${cursor}</span>`;
            },
          }
        );
      });

      tl.to(
        {},
        {
          duration: 0.5,
          repeat: -1,
          onRepeat: () => {
            const current = titleRef.current!.querySelector("span");
            if (current) {
              current.style.opacity = current.style.opacity === "1" ? "0" : "1";
              current.style.color = theme.palette.secondary.main;
            }
          },
        },
        text.length * 0.05
      );
    };

    ScrollTrigger.create({
      trigger: titleRef.current,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: animateText,
      onEnterBack: animateText,
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [text, theme.palette.primary.main]);

  return (
    <h3
      ref={titleRef}
      aria-label={text}
      style={{
        color: theme.palette.primary.main,
        textAlign: "center",
        textShadow: `0 0 12px ${theme.palette.primary.main}`,
        letterSpacing: 2,
        marginBottom: "1.5rem",
        fontFamily: theme.typography.fontFamily,
        whiteSpace: "pre",
        fontSize,
        minHeight: "3.5rem",
      }}
    >
      <span style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}>
        {text}
      </span>
    </h3>
  );
}
