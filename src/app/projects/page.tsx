import Link from "next/link";
import { GanadosProject } from "./components/ganados/GanadosProject";
import { HandinProject } from "./components/handin/HandinProject";
import { IzifileProject } from "./components/izifile/IzifileProject";
import { MishisimiProject } from "./components/mishisimi/MishisimiProject";
export default function ProjectPage() {
  return (
    <div className="pt-16 snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden relative">
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="/"
          className="bg-white/90 hover:bg-white text-gray-800 px-6 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 hover:scale-105 shadow-xl border border-gray-200"
        >
          <span className="text-sm">←</span>
          <span className="text-sm font-semibold">Volver al Portafolio</span>
        </Link>
      </div>

      <section className="snap-start h-screen">
        <IzifileProject />
      </section>

      <section className="snap-start h-screen">
        <HandinProject />
      </section>

      <section className="snap-start h-screen">
        <GanadosProject />
      </section>

      <section className="snap-start h-screen">
        <MishisimiProject />
      </section>
    </div>
  );
}
