import React from "react";

type BlobProps = {
  position?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "custom";
  customPosition?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "custom";
  customSize?: { width: string; height: string };
  color?: "primary" | "secondary" | "accent" | "custom";
  customColor?: string;
  blur?: "none" | "sm" | "md" | "lg" | "xl";
  className?: string;
  showOnMobile?: boolean;
};

export const DecorationBlob: React.FC<BlobProps> = ({
  position = "top-left",
  customPosition,
  size = "md",
  customSize,
  color = "primary",
  customColor,
  blur = "lg",
  className = "",
  showOnMobile = false,
}) => {
  const positionClasses = {
    "top-left": "top-10 left-10",
    "top-right": "top-10 right-10",
    "bottom-left": "bottom-10 left-10",
    "bottom-right": "bottom-10 right-10",
    custom: customPosition || "",
  };

  const sizeClasses = {
    xs: "w-4 h-4",
    sm: "w-8 h-8",
    md: "w-16 h-16",
    lg: "w-24 h-24",
    xl: "w-32 h-32",
    custom: customSize ? `${customSize.width} ${customSize.height}` : "",
  };

  const colorClasses = {
    primary: "bg-primary/20",
    secondary: "bg-secondary/30",
    accent: "bg-accent/20",
    custom: customColor || "",
  };

  const blurClasses = {
    none: "",
    sm: "blur-sm",
    md: "blur",
    lg: "blur-lg",
    xl: "blur-xl",
  };

  return (
    <div
      className={`
        absolute rounded-full
        ${positionClasses[position]}
        ${sizeClasses[size]}
        ${colorClasses[color]}
        ${blurClasses[blur]}
        ${showOnMobile ? "" : "hidden lg:block"}
        ${className}
      `}
      aria-hidden="true"
    />
  );
};

type DecorativeBlobsProps = {
  blobs: BlobProps[];
  className?: string;
};

export const DecorativeBlobs: React.FC<DecorativeBlobsProps> = ({
  blobs,
  className = "",
}) => {
  return (
    <div className={`${className}`}>
      {blobs.map((blob, index) => (
        <DecorationBlob key={index} {...blob} />
      ))}
    </div>
  );
};

export default DecorativeBlobs;
