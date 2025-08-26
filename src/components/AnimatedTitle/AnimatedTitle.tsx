import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedTitle({ text }: { text: string }) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [fontSize, setFontSize] = useState("3rem");

  // Actualizar tamaño según ancho de pantalla
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
                `<span style="display:inline-block;opacity:1">${cursor}</span>`;
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
  }, [text]);

  return (
    <h3
      ref={titleRef}
      aria-label={text}
      style={{
        color: "#00ff99",
        textAlign: "center",
        textShadow: "0 0 12px #00ff99",
        letterSpacing: 2,
        marginBottom: "1.5rem",
        fontFamily: "'VT323', monospace",
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
