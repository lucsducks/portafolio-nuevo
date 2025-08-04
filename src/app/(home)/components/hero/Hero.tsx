"use client";

import React, { useEffect, useRef, useState } from "react";
import Avatar from "../../assets/avatar.webp";
import Image from "next/image";
import Link from "next/link";

interface AdaptiveTextProps {
  text: string;
  className?: string;
  defaultColor: string;
  colorOnPrimary: string;
  diagonalPosition: number;
}

const AdaptiveText: React.FC<AdaptiveTextProps> = ({
  text,
  className = "",
  defaultColor,
  colorOnPrimary,
  diagonalPosition,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [wordColors, setWordColors] = useState<string[]>([]);
  const words = text.split(" ");

  useEffect(() => {
    const checkWords = () => {
      if (!containerRef.current) return;

      const section = containerRef.current.closest("section");
      if (!section) return;

      const sectionRect = section.getBoundingClientRect();
      const wordElements = containerRef.current.querySelectorAll(".word-span");

      const newWordColors: string[] = [];

      wordElements.forEach((wordEl) => {
        const wordRect = wordEl.getBoundingClientRect();
        const wordCenterX =
          wordRect.left + wordRect.width / 2 - sectionRect.left;
        const wordCenterY =
          wordRect.top + wordRect.height / 2 - sectionRect.top;

        const sectionHeight = sectionRect.height;
        const sectionWidth = sectionRect.width;

        const x1 = sectionWidth;
        const y1 = sectionHeight * (diagonalPosition / 100);
        const x2 = 0;
        const y2 = sectionHeight * ((diagonalPosition + 25) / 100);
        const m = (y2 - y1) / (x2 - x1);
        const b = y1 - m * x1;

        const yThresholdFromLine = m * wordCenterX + b;
        const isInColorZone = wordCenterY > yThresholdFromLine;

        newWordColors.push(isInColorZone ? colorOnPrimary : defaultColor);
      });

      setWordColors(newWordColors);
    };

    checkWords();
    window.addEventListener("resize", checkWords);
    window.addEventListener("scroll", checkWords);

    return () => {
      window.removeEventListener("resize", checkWords);
      window.removeEventListener("scroll", checkWords);
    };
  }, [defaultColor, colorOnPrimary, diagonalPosition]);

  return (
    <div ref={containerRef} className={className}>
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <span
            className={`word-span ${
              wordColors[index] || defaultColor
            } transition-colors duration-300`}
          >
            {word}
          </span>
          {index < words.length - 1 && " "}
        </React.Fragment>
      ))}
    </div>
  );
};

export const Hero: React.FC = () => {
  const [diagonalPosition, setDiagonalPosition] = useState(45);
  const [lastScrollY, setLastScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;

      setDiagonalPosition((prev) =>
        Math.max(0, Math.min(50, prev + (isScrollingDown ? -2 : 2)))
      );

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  const badgeRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const checkBadge = () => {
      if (!badgeRef.current || !sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const badgeRect = badgeRef.current.getBoundingClientRect();

      const centerY = badgeRect.top + badgeRect.height / 2 - sectionRect.top;
      const y1 = sectionRect.height * (diagonalPosition / 100);
      const y2 = sectionRect.height * ((diagonalPosition + 25) / 100);
      const inPrimaryZone = centerY > y1 && centerY < y2;

      badgeRef.current.className = `
      inline-block px-4 py-1.5 rounded-full font-medium text-sm transition-colors duration-300
      ${inPrimaryZone ? "bg-white/10 text-white" : "bg-primary/10 text-primary"}
    `;
    };

    checkBadge();
    window.addEventListener("scroll", checkBadge);
    window.addEventListener("resize", checkBadge);
    return () => {
      window.removeEventListener("scroll", checkBadge);
      window.removeEventListener("resize", checkBadge);
    };
  }, [diagonalPosition]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full min-h-[calc(100vh-76px)] flex items-center py-12 md:py-0 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 w-full h-full">
        <div className="w-full h-full bg-primary/80 relative">
          <div
            className="absolute top-0 left-0 w-full h-full bg-background"
            style={{
              clipPath: `polygon(0% 0%, 100% 0%, 100% ${diagonalPosition}%, 0% ${
                diagonalPosition + 25
              }%, 0% 0%)`,
              WebkitClipPath: `polygon(0% 0%, 100% 0%, 100% ${diagonalPosition}%, 0% ${
                diagonalPosition + 25
              }%, 0% 0%)`,
            }}
          ></div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-4 md:space-y-6">
              <div ref={badgeRef}>
                <AdaptiveText
                  text="Desarrollador Full Stack"
                  defaultColor="text-primary"
                  colorOnPrimary="text-white"
                  diagonalPosition={diagonalPosition}
                />
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
                <AdaptiveText
                  text="Hola, soy Lucas "
                  defaultColor="text-primary"
                  colorOnPrimary="text-white"
                  diagonalPosition={diagonalPosition}
                />
              </h1>

              <h2 className="text-lg md:text-xl max-w-md mx-auto lg:mx-0 text-foreground/80">
                <AdaptiveText
                  text="Soy estudiante de sistemas y trabajo en proyectos con varios lenguajes frontend y backend. ¡Contáctame si quieres saber más!
"
                  defaultColor="text-foreground/70"
                  colorOnPrimary="text-white"
                  diagonalPosition={diagonalPosition}
                />
              </h2>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link
                  href="/projects"
                  className="font-large flex items-center gap-1 group"
                >
                  <AdaptiveText
                    text="Proyectos"
                    defaultColor="text-primary"
                    colorOnPrimary="text-white"
                    diagonalPosition={diagonalPosition}
                  />
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <Image
              src={Avatar}
              alt="Mi avatar"
              className="w-full max-w-sm mx-auto rounded-full shadow-lg"
              priority
            />
          </div>
        </div>

        <div className="mt-10 md:mt-12 lg:hidden relative flex justify-center">
          <Image
            src={Avatar}
            alt="Mi avatar"
            className="w-40 rounded-full shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
