"use client";

import Link from "next/link";
import React from "react";

interface Achievement {
  title: string;
  year: string;
  description: string;
  link: string;
  type: "Hackathon" | "Investigación";
}

const achievements: Achievement[] = [
  {
    title: "Hackathon InspiraTEC",
    year: "2024",
    link: "https://www.linkedin.com/posts/idat_innovaciaejnsostenible-inspiratechackathon-activity-7268005837208485889-RAry?utm_source=share&utm_medium=member_desktop&rcm=ACoAADXocAkB2pvdRrQGhK7lkS3fEtykdO61SyQ",
    type: "Hackathon",
    description:
      "Proyecto de chaleco inteligente para personas con discapacidad visual. Ganador por su enfoque inclusivo y uso de IA. Organizado por IDAT y Pachaqtec.",
  },
  {
    title: "Hackathon EduTech Solagri",
    year: "2025",
    type: "Hackathon",
    link: "https://www.linkedin.com/posts/solagriperusac_hace-poco-m%C3%A1s-de-un-mes-el-16-de-diciembre-activity-7288597604169363456-j1PB?utm_source=share&utm_medium=member_desktop&rcm=ACoAADXocAkB2pvdRrQGhK7lkS3fEtykdO61SyQ",
    description:
      "Ganador con una plataforma educativa centrada en el aprendizaje digital. Reconocimiento por innovación educativa con impacto social.",
  },
  {
    title: "Premio Semilleros de Investigación UNHEVAL",
    year: "2023",
    link: "https://transparencia.unheval.edu.pe/inicio/descargar?file=f1c3389e5beac5ee7ae22a023baa0bac1bc95b3912e130cb36e7c92c848ba50fc939d3199683373405b794173adccb9eb3437aea5827f61eb4b0da86e061a4ceb437a891fce5c883afc2b05c4800d490350a9aaf30",
    type: "Investigación",
    description:
      "Reconocimiento por el desarrollo de una app para la enseñanza del idioma quechua central con inteligencia artificial y enfoque pedagógico intercultural.",
  },
  {
    title: "Premio Semilleros de Investigación UNHEVAL",
    year: "2025",
    link: "https://drive.google.com/file/d/14LV0xaveWkiUh5SxpeVg-qKkFTliRue8/view",
    type: "Investigación",
    description:
      "Ganador con una propuesta de movilidad asistida para personas ciegas: app móvil y chaleco inteligente con deep learning. Apoyo y financiamiento institucional.",
  },
];
const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-foreground/70">Logros y</h2>
        <h2 className="text-3xl md:text-4xl text-primary">reconocimientos</h2>
        <p className="mt-4 text-muted-foreground text-sm max-w-xl mx-auto">
          A lo largo de mi trayectoria académica he participado en diversas
          iniciativas que promueven la innovación y el desarrollo tecnológico
          con impacto social.
        </p>
      </div>

      <div className="grid gap-y-5 gap-x-8 md:grid-cols-2 justify-center">
        {achievements.map((item, idx) => (
          <Link href={item.link} target="_blank" key={idx}>
            <div
              key={idx}
              className="group border border-border rounded-xl p-5 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-out bg-card mx-auto max-w-xl cursor-pointer hover:border-primary/30"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-primary group-hover:text-primary/80 transition-colors duration-300">
                  {item.year}
                </span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-semibold transition-all duration-300 group-hover:scale-110 ${
                    item.type === "Hackathon"
                      ? "bg-emerald-100 text-emerald-700 group-hover:bg-emerald-200"
                      : "bg-indigo-100 text-indigo-700 group-hover:bg-indigo-200"
                  }`}
                >
                  {item.type}
                </span>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
