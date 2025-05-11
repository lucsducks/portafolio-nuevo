import { Logo } from "@/components";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-10 w-full overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <Logo className="h-8 fill-current mb-4 mx-auto md:mx-0" />
            <p className="text-sm max-w-sm">
              Portafolio personal de Fredhy Eduardo Rosas Lucas. Proyectos,
              logros y contribuciones en tecnología e innovación social.
            </p>
          </div>

          <div className="flex flex-col md:items-end items-center gap-2">
            <p className="text-sm font-semibold uppercase">Contáctame</p>
            <div className="flex space-x-4 mt-1">
              <Link
                href="https://github.com/lucsducks"
                target="_blank"
                aria-label="GitHub"
              >
                <Github
                  size={20}
                  className="hover:opacity-80 transition-opacity"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/fredhy-eduardo-rosas-lucas-461a82212"
                target="_blank"
                aria-label="LinkedIn"
              >
                <Linkedin
                  size={20}
                  className="hover:opacity-80 transition-opacity"
                />
              </Link>
              <Link
                href="mailto:eduardolucas1617y@gmail.com"
                aria-label="Correo"
              >
                <Mail
                  size={20}
                  className="hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-primary-foreground/10 text-center text-sm">
          © {new Date().getFullYear()} Lucas. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
