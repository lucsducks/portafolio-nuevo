import { SearchX } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4">
      <SearchX size={128} className="text-primary-700" />
      <h1 className="text-3xl font-extrabold text-primary-950">
        404 - Not found
      </h1>
      <p className="text-lg text-grayscale-900">
        No se encontró el recurso solicitado
      </p>
      <Link
        href="/"
        className="rounded-2xl bg-primary-700 px-4 py-4 font-semibold text-white"
      >
        Volver a la página de inicio
      </Link>
    </div>
  );
};

export default NotFound;
