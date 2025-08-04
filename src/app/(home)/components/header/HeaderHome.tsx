"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MenuItem } from "./NavigationMenuItem";
import { Logo } from "@/components";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { MenuSheet } from "./MenuSheet";

export const HeaderHome = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`w-full py-3 px-6 border-b bg-background/95 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Logo className="h-6 fill-primary" />
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex gap-6">
            <MenuItem title={"Inicio"} path={"#hero"} />
            <MenuItem title={"Proyectos"} path={"/projects"} />
            <MenuItem title={"Logros"} path={"#achievements"} />

            <MenuItem title={"Contáctame"} path={"#contact"} />
          </NavigationMenuList>
        </NavigationMenu>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[75vw] sm:w-[350px]">
            <SheetHeader className="mb-2">
              <SheetTitle>Menú</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-6 mr-5 ml-5">
              <div className="flex flex-col space-y-3 text-foreground">
                <Logo className="h-6 fill-primary mb-" />
                <MenuSheet title="Inicio" path={"#hero"} />
                <MenuSheet title="Proyectos" path={"/projects"} />
                <MenuSheet title="Logros" path={"#achievements"} />
                <MenuSheet title="Contáctame" path={"#contact"} />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default HeaderHome;
