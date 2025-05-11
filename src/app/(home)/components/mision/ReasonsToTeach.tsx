"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface SkillCardProps {
  title: string;
  description: string;
  url: string;
  image: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  image,
  description,
  url,
}) => {
  return (
    <div className="flex flex-col items-center text-center space-y-3 px-4 w-2/3 mx-auto">
      <Link
        href={`${url}`}
        className="flex flex-col items-center space-y-3"
        target="_blank"
      >
        <div className="w-12 h-12 relative">
          <Image src={image} alt={title} fill className="object-contain" />
        </div>
        <h2 className="font-semibold">{title}</h2>
        <p className="text-muted-foreground text-sm">{description}</p>
      </Link>
    </div>
  );
};

export const Skills: React.FC = () => {
  const skills: SkillCardProps[] = [
    {
      title: "Flutter",
      description: "Desarrollo de apps móviles nativas con Dart y Flutter.",
      url: "https://flutter.dev/",
      image:
        "https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=000000",
    },
    {
      title: "NestJS",
      url: "https://nestjs.com/",
      description: "Framework backend robusto y escalable con TypeScript.",
      image:
        "https://img.icons8.com/?size=100&id=9ESZMOeUioJS&format=png&color=000000",
    },
    {
      title: "GitHub",
      url: "https://github.com/",
      description: "Control de versiones, colaboración y despliegue continuo.",
      image:
        "https://img.icons8.com/?size=100&id=52539&format=png&color=000000",
    },
    {
      title: "TypeScript",
      url: "https://www.typescriptlang.org/",
      description: "JavaScript tipado para mayor robustez y escalabilidad.",
      image: "https://www.typescriptlang.org/icons/icon-48x48.png",
    },
    {
      title: "Next.js",
      url: "https://nextjs.org/",
      description: "Framework React para apps con SSR, SSG y API integradas.",
      image:
        "https://img.icons8.com/?size=100&id=r2OarXWQc7B6&format=png&color=ffffff",
    },
    {
      title: "React",
      url: "https://reactjs.org/",
      description:
        "Librería para construir interfaces de usuario interactivas.",
      image:
        "https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000f",
    },
    {
      title: "Tailwind CSS",
      url: "https://tailwindcss.com/",
      description: "Framework CSS para diseño rápido y responsivo.",
      image:
        "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
    },
    {
      title: "PostgreSQL",
      url: "https://www.postgresql.org/",
      description: "Base de datos relacional potente y escalable.",
      image:
        "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
    },
    {
      title: "Firebase",
      url: "https://firebase.google.com/",
      description: "Plataforma para desarrollo de apps móviles y web.",
      image:
        "https://img.icons8.com/?size=100&id=62452&format=png&color=000000",
    },
    {
      title: "MongoDB",
      url: "https://www.mongodb.com/",
      description: "Base de datos NoSQL para aplicaciones escalables.",
      image:
        "https://img.icons8.com/?size=100&id=74402&format=png&color=000000",
    },
  ];

  return (
    <section className="py-16 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-foreground/70">
            Tecnologías que uso
          </h2>
          <h2 className="text-3xl md:text-4xl text-primary">con confianza</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              image={skill.image}
              title={skill.title}
              url={skill.url}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
