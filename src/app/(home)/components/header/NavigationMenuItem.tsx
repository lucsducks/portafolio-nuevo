import React from "react";
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

interface Props {
  title: string;
  path: string;
}

export const MenuItem = ({ title, path }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (path.startsWith("#")) {
      e.preventDefault();
      const targetId = path.replace("#", "");
      const element = document.getElementById(targetId);

      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <NavigationMenuItem>
      <NavigationMenuLink href={path} onClick={handleClick}>
        {title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};
