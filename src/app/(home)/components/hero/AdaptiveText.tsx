"use client";

import React, { useEffect, useRef, useState } from "react";

interface AdaptiveTextProps {
  text: string;
  className?: string;
  defaultColor: string;
  colorOnPrimary: string;
}

const AdaptiveText: React.FC<AdaptiveTextProps> = ({
  text,
  className = "",
  defaultColor,
  colorOnPrimary,
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

        const diagonalEl = section.querySelector(".bg-white");
        let diagonalPosition = 45;

        if (diagonalEl) {
          const style = window.getComputedStyle(diagonalEl);
          const clipPath = style.clipPath || "";
          const match = clipPath.match(
            /polygon\([^,]+,[^,]+,[^,]+,\s*([0-9.]+)%/
          );
          if (match && match[1]) {
            diagonalPosition = parseFloat(match[1]);
          }
        }

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
  }, [defaultColor, colorOnPrimary]);

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

export default AdaptiveText;
