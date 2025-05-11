"use client";

import React from "react";

interface Achievement {
  title: string;
  year: string;
  description: string;
  type: "Hackathon" | "Investigación";
}

const achievements: Achievement[] = [
  {
    title: "Hackathon InspiraTEC",
    year: "2024",
    type: "Hackathon",
    description:
      "Proyecto de chaleco inteligente para personas con discapacidad visual. Ganador por su enfoque inclusivo y uso de IA. Organizado por IDAT y Pachaqtec.",
  },
  {
    title: "Hackathon EduTech Solagri",
    year: "2025",
    type: "Hackathon",
    description:
      "Ganador con una plataforma educativa centrada en el aprendizaje digital. Reconocimiento por innovación educativa con impacto social.",
  },
  {
    title: "Premio Semilleros de Investigación UNHEVAL",
    year: "2023",
    type: "Investigación",
    description:
      "Reconocimiento por el desarrollo de una app para la enseñanza del idioma quechua central con inteligencia artificial y enfoque pedagógico intercultural.",
  },
  {
    title: "Premio Semilleros de Investigación UNHEVAL",
    year: "2025",
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
          <div
            key={idx}
            className="border border-border rounded-xl p-5 hover:shadow-md transition-shadow duration-300 bg-card mx-auto max-w-xl"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-primary">
                {item.year}
              </span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                  item.type === "Hackathon"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-indigo-100 text-indigo-700"
                }`}
              >
                {item.type}
              </span>
            </div>
            <h3 className="text-base font-semibold text-foreground mb-1">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
