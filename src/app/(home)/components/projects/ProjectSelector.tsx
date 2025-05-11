"use client";
import React, { useState, FC, useEffect, useCallback } from "react";
import styles from "./FeatureSelector.module.css";

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
  color: string;
}

interface FeatureSelectorProps {
  items: FeatureItem[];
  className?: string;
  layout?: "vertical" | "horizontal";
}

const FeatureSelector: FC<FeatureSelectorProps> = ({
  items,
  className = "",
  layout = "vertical",
}) => {
  const [activeItem, setActiveItem] = useState<string>(items[0]?.id || "");
  const [rotation, setRotation] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const getItemPosition = useCallback(
    (index: number, total: number) => {
      const angle = (index * 360) / total;
      const radius = isMobile ? 35 : 40;
      return {
        left: `${50 + radius * Math.cos((angle - 90) * (Math.PI / 180))}%`,
        top: `${50 + radius * Math.sin((angle - 90) * (Math.PI / 180))}%`,
        angle,
      };
    },
    [isMobile]
  );

  useEffect(() => {
    if (items.length <= 1) return;

    const rotationInterval = setInterval(() => {
      if (isAnimating) return;

      const currentIndex = items.findIndex((item) => item.id === activeItem);
      const nextIndex = (currentIndex + 1) % items.length;

      setIsAnimating(true);
      setActiveItem(items[nextIndex].id);

      const itemPosition = getItemPosition(nextIndex, items.length);
      setRotation(-itemPosition.angle);

      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    }, 5000);

    return () => {
      clearInterval(rotationInterval);
    };
  }, [activeItem, isAnimating, items, getItemPosition]);

  const handleItemClick = (id: string, index: number) => {
    if (isAnimating || id === activeItem) return;

    setIsAnimating(true);
    setActiveItem(id);

    const itemPosition = getItemPosition(index, items.length);
    setRotation(-itemPosition.angle);

    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  const getActiveItem = () => {
    return items.find((item) => item.id === activeItem);
  };

  const containerClass = `${styles.container} ${
    isMobile ? styles.vertical : styles[layout]
  } ${className}`;

  return (
    <div className={containerClass}>
      <div className={styles.orbitContainer}>
        <div
          className={styles.orbit}
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {items.map((item, index) => {
            const position = getItemPosition(index, items.length);
            return (
              <div
                key={item.id}
                className={`${styles.featureItem} ${
                  activeItem === item.id ? styles.active : ""
                }`}
                style={{
                  left: position.left,
                  top: position.top,
                  backgroundColor: item.color,
                  transform: `translate(-50%, -50%) rotate(${-rotation}deg)`,
                }}
                onClick={() => handleItemClick(item.id, index)}
                title={item.title}
              >
                {item.icon ? (
                  <span
                    className={styles.icon}
                    dangerouslySetInnerHTML={{ __html: item.icon }}
                  />
                ) : (
                  <span></span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.featureContent}>
        {getActiveItem() && (
          <div className={styles.featureTextContainer}>
            <h3 className={styles.featureTitle}>
              {getActiveItem()?.title || ""}
            </h3>
            <p className={styles.featureDescription}>
              {getActiveItem()?.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureSelector;
