import FeatureSelector from "./ProjectSelector";
export default function Project() {
  const featureItems = [
    {
      id: "create",
      title: "IziFile",
      description:
        "IziFile es una solución para la transferencia de archivos segura mediante protocolos SFTP y SSH. Este proyecto integra tecnologías como NodeJS para la lógica del servidor, Dart para ciertas funciones de interfaz, MongoDB para almacenamiento de registros de transferencia, y Flutter para una interfaz móvil multiplataforma, brindando una experiencia fluida y segura para usuarios técnicos y no técnicos.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>',
      color: "#4F46E5",
      order: 1,
      buttonText: "Descargar para Android o Windows",
      link: "https://izifile.eduardolucas.lat/",
      animationDelay: "0s",
    },
    {
      id: "record",
      title: "Mishimisi",
      description:
        "Mishimisi es una aplicación móvil educativa diseñada para enseñar el idioma quechua utilizando inteligencia artificial, específicamente Gemini. La app ofrece una experiencia interactiva mediante procesamiento de lenguaje natural, y está construida con Flutter para compatibilidad multiplataforma, NestJS para la arquitectura backend escalable, y PostgreSQL para el manejo de contenidos y sesiones de usuario.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>',
      color: "#10B981",
      order: 2,
      animationDelay: "0.1s",
    },
    {
      id: "conferencias",
      title: "Cattle Management",
      description:
        "Cattle Management es un sistema integral de gestión ganadera que permite administrar operaciones de compra, venta y control de personal. Desarrollado con tecnologías tradicionales como HTML, JavaScript, PHP y CSS, está orientado a pequeños y medianos productores que necesitan digitalizar sus procesos de manera eficiente, con acceso a reportes e historiales personalizados.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
      color: "#0EA5E9",
      order: 3,
      buttonText: "Probar ahora",
      link: "https://ganados.eduardolucas.lat/",
      animationDelay: "0.2s",
    },
    {
      id: "certificados",
      title: "Mindwell",
      description:
        "Mindwell es una aplicación que ayuda a los usuarios a descubrir su tipo de personalidad mediante la aplicación digital del test de Eysenck. Utiliza Flutter para la interfaz, Dart para lógica de flujo, NestJS como backend para gestionar cuestionarios, y PostgreSQL para almacenar resultados y métricas psicológicas, permitiendo un análisis personalizado del perfil emocional y cognitivo.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M8 13v-1h8v1"></path><path d="M12 16V8"></path><path d="M15 11l-3-3-3 3"></path></svg>',
      color: "#6366F1",
      order: 4,
      animationDelay: "0.3s",
    },
    {
      id: "marketing",
      title: "Handin",
      description:
        "Handin es una plataforma educativa colaborativa nacida en una hackatón, enfocada en conectar educadores con estudiantes a través de conferencias, cursos y espacios de aprendizaje en línea. El proyecto fue desarrollado con tecnologías modernas como Next.js, Tailwind CSS y NestJS. Actualmente se encuentra en línea en handin.pro y ofrece una interfaz accesible, con sistema de cuentas y herramientas para creadores de contenido.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 7l-8.9 8.9-5-5L2 17.5V22h4.5L22 7z"></path><line x1="16" y1="2" x2="22" y2="8"></line><line x1="14" y1="6" x2="8" y2="12"></line></svg>',
      color: "#F97316",
      order: 5,
      animationDelay: "0.4s",
    },
    {
      id: "horario",
      title: "Eley",
      description:
        "Eley es una aplicación móvil diseñada para asistir a personas con discapacidad visual en su desplazamiento autónomo. Integra sensores físicos y procesamiento de imágenes mediante modelos de Deep Learning para detectar obstáculos y generar rutas seguras. Actualmente está en desarrollo con Flutter y Dart, y apunta a convertirse en una herramienta inclusiva para mejorar la movilidad urbana.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>',
      color: "#EAB308",
      order: 6,
      animationDelay: "0.5s",
    },
  ];

  return (
    <div id="project" className="py-16 px-4">
      <div className="text-center ">
        <h2 className="text-3xl md:text-4xl text-foreground/70">
          Algunos de mis
        </h2>
        <h2 className="text-3xl md:text-4xl text-primary">proyectos</h2>
      </div>
      <FeatureSelector items={featureItems} layout="horizontal" />{" "}
    </div>
  );
}
